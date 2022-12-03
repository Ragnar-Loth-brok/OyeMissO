import React from 'react';
import {Animated} from 'react-native';

import PostScreen from '../screens/Feed/PostScreen';
// import BottomTabNavigation from './BottomTabNavigation';
import Reactions from '../screens/Feed/Reactions';
import NewPost from '../screens/Post/NewPost';
import PhotoEditor from '../screens/Post/PhotoEditor';
import Preferences from '../screens/Post/Preferences';
import Published from '../screens/Post/Published';
import CommentScreen from '../screens/Feed/CommentScreen';
import CurvedBottomTabBar from './CurvedBottomTabBar';

import {createStackNavigator} from '@react-navigation/stack';
import {widthPercentageToDP} from 'react-native-responsive-screen';

type RootStackParamList = {
  Feeds: undefined;
  Post: undefined;
  Reaction: undefined;
  AddPost: undefined;
  NewPost: undefined;
  Edit: undefined;
  Preferences: undefined;
  Published: undefined;
  // We are still working on comment Screen
  Comment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
// const Stack = createNativeStackNavigator<RootStackParamList>();

type StyleInterpolatorProps = {
  current: {
    progress: any;
  };
  next: {
    progress: any;
  };
  inverted: any;
  layouts: {
    screen: {
      width: number;
    };
  };
};

const cardStyleInterpolator = ({
  current,
  next,
  inverted,
  layouts: {screen},
}: StyleInterpolatorProps) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [screen.width, 0, -screen.width],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

function AddNewPost() {
  return (
    <Stack.Navigator
      initialRouteName="NewPost"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator,
        // cardStyleInterpolator: ({current}) => ({
        //   cardStyle: {
        //     opacity: current.progress,
        //   },
        // }),
      }}>
      {/* Filter screen (Still working) */}
      <Stack.Screen name="Edit" component={PhotoEditor} />
      {/* For adding new post, editing text (bold, underline, etc etc) */}
      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Published" component={Published} />
    </Stack.Navigator>
  );
}

export default function FeedStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Feeds"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator,
        // cardStyleInterpolator: ({current}) => ({
        //   cardStyle: {
        //     transform: [
        //       {
        //         scale: current.progress,
        //       },
        //     ],
        //     borderRadius: widthPercentageToDP(100),
        //   },
        // }),
      }}>
      {/* Bottom Tab Navigator */}
      <Stack.Screen name="Feeds" component={CurvedBottomTabBar} />
      <Stack.Screen name="Post" component={PostScreen} />
      {/* Navigation for reactions */}
      <Stack.Screen name="Reaction" component={Reactions} />
      {/* Navigation for adding new post (Filter screen) */}
      <Stack.Screen name="AddPost" component={AddNewPost} />
      {/* We are still working on comment screen */}
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
}
