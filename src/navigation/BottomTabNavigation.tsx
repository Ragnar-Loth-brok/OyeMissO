import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import CustomTabBar from './CustomTabBar';
import HomeScreen from '../screens/Feed/HomeScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import ProfileScreen from '../screens/MySite/MySite';
import SearchScreen from '../screens/Search/SearchScreen';

import colors from '../assets/colors';
import constants from '../assets/constants';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {StackNavigationProp} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const stackNavigation = useNavigation<StackNavigationProp<any>>();

  const newPostNavigate = () => {
    stackNavigation.navigate('AddPost');
  };

  const [active, setActive] = useState('Feeds');

  const onPress = (screen: string) => {
    setActive(screen);
  };
  // Bottom Tab
  // As of now we are using Svg icons
  // Todo -> We'll use fontello for Tab navigation when all icons will be finalized by designer.

  return (
    <Tab.Navigator
      tabBar={({navigation}) => (
        // Our custom tab bar (this is temp tab bar coz currently we didnt get shadowed tabbar yet.)
        <CustomTabBar
          newPostNavigate={newPostNavigate}
          navigation={navigation}
          onPress={onPress}
          active={active}
        />
      )}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 50,
          backgroundColor: colors.appBackground,
          shadowColor: colors.shadowColor,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      {/* These next two screens are pending */}
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.appBackground,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: constants.fontBold,
            fontSize: widthPercentageToDP(5.8),
          },
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
