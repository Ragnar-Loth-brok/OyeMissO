import React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/Splash/SplashScreen';
import AuthNavigation from './AuthNavigation';
import FeedStackNavigation from './FeedStackNavigation';

const Stack = createStackNavigator();

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

export default function RootNavigation() {
  // AuthNavigatin - Sign In  and Sign up flow
  // BottomTabNavigator - Feed screen flow
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthNavigation} />
      {/* FeedStackNavigation contains bottomTabBar and other stack navigation */}
      <Stack.Screen name="App" component={FeedStackNavigation} />
    </Stack.Navigator>
  );
}
