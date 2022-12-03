import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../assets/colors';
import constants from '../assets/constants';

import HomeScreen from '../screens/Feed/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import MySite from '../screens/MySite/MySite';
import MyPosts from '../screens/MySite/MyPosts';
import ProfileScreen from '../screens/MySite/ProfileScreen';
import SiteNavigation from './SiteNavigation';
import ProfileSetting from '../screens/ManageUpdates/ProfileSetting';
import ManageUpdate from '../screens/ManageUpdates/ManageUpdate';
import Partners from '../screens/ManageUpdates/Partners';
import PartnerInfo from '../screens/ManageUpdates/PartnerInfo';
import AddNewPartner from '../screens/ManageUpdates/AddNewPartner';
import Reminder from '../screens/ReminderScreens/Reminder';
import CustomReminder from '../screens/ReminderScreens/CustomReminder';
import EditReminder from '../screens/ReminderScreens/EditReminder';
import Billing from '../screens/Billing/Billing';
import BillingScreen from '../screens/Billing/BillingScreen';
import InviteScreen from '../screens/Billing/InviteScreen';
import PricingPlans from '../screens/Billing/PricingPlans';
import PaymentMethodScreen from '../screens/Billing/PaymentMethodScreen';
import InvitationMethod from '../screens/Billing/InvitationMethod';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

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

type SiteStackParamList = {
  MySite: undefined;
  MyPosts: undefined;
  MyProfile: undefined;
  SiteManagement: undefined;
  Reminder: undefined;
  MyProfileScreen: undefined;
  ProfileSetting: undefined;
  ManageUpdates: undefined;
  Partners: undefined;
  PartnerInfo: undefined;
  NewPartner: undefined;
  CustomReminder: undefined;
  EditReminder: undefined;
  BillingScreen: undefined;
  inviteFriend: undefined;
  PricingPlans: undefined;
  PaymentMethodScreen: undefined;
  InvitationMethod: undefined;
};

// const Stack = createNativeStackNavigator<SiteStackParamList>();

const Stack = createStackNavigator<SiteStackParamList>();

type Args = {
  navigation: any;
  route: any;
  enableTabBar: (val: boolean) => void;
};

function MyProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator,
      }}
      initialRouteName="MyProfileScreen">
      <Stack.Screen name="MyProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SiteManagement" component={SiteNavigation} />
      {/* <Stack.Screen name="Reminder" component={ReminderNavigation} /> */}
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Reminder" component={Reminder} />
        <Stack.Screen name="CustomReminder" component={CustomReminder} />
        <Stack.Screen name="EditReminder" component={EditReminder} />
      </Stack.Group>
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
      <Stack.Screen name="ManageUpdates" component={ManageUpdate} />
      <Stack.Group>
        <Stack.Screen name="Partners" component={Partners} />
        <Stack.Screen name="PartnerInfo" component={PartnerInfo} />
        <Stack.Screen name="NewPartner" component={AddNewPartner} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="BillingScreen" component={BillingScreen} />
        <Stack.Screen name="PricingPlans" component={PricingPlans} />
        <Stack.Screen name="inviteFriend" component={InviteScreen} />
        <Stack.Screen name="InvitationMethod" component={InvitationMethod} />

        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function MySiteNavigation({navigation, route, enableTabBar}: Args) {
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (
      routeName === 'MyPosts' ||
      routeName === 'MyProfile' ||
      routeName === 'SiteManagement'
    ) {
      enableTabBar(false);
    } else {
      enableTabBar(true);
    }
  }, [navigation, route, enableTabBar]);

  return (
    <Stack.Navigator
      initialRouteName="MySite"
      screenOptions={{
        headerTitle: '',
        // headerShown: false,
        // headerShadowVisible: false,
        // gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator,
      }}>
      <Stack.Screen
        name="MySite"
        component={MySite}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MyPosts" component={MyPosts} />
      <Stack.Screen
        options={{headerShown: false}}
        name="MyProfile"
        component={MyProfileNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SiteManagement"
        component={SiteNavigation}
      />
    </Stack.Navigator>
  );
}

export default function CurvedBottomTabBar() {
  // const stackNavigation = useNavigation<StackNavigationProp<any>>();
  const stackNavigation = useNavigation<StackNavigationProp<any>>();
  const tabRef = useRef<any>();

  const newPostNavigate = () => {
    stackNavigation.navigate('AddPost');
  };

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';
    let type = 'ionicon';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        type = 'custom-icon';
        break;
      case 'Search':
        icon = 'search-outline';
        break;
      case 'Notifications':
        icon = 'notifications-outline';
        break;
      case 'My Site':
        icon = 'user';
        type = 'antdesign';
        break;
    }

    return (
      <>
        <Icon
          name={icon}
          size={hp(3.2)}
          color={
            routeName === selectedTab ? colors.primaryDefault : colors.hand
          }
          type={type}
        />
        <Text
          style={{
            fontSize: hp(1.5),
            color:
              routeName === selectedTab ? colors.primaryDefault : colors.hand,
          }}>
          {routeName}
        </Text>
      </>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <Pressable
        onPress={() => navigate(routeName)}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </Pressable>
    );
  };
  const enableTabBar = (val: boolean) => {
    tabRef.current && tabRef.current.setVisible(val);
  };

  return (
    <CurvedBottomBar.Navigator
      ref={tabRef}
      type="DOWN"
      style={styles.bottomBar}
      strokeWidth={0.6}
      height={hp(10)}
      strokeColor={colors.border}
      circleWidth={hp(7.5)}
      bgColor={colors.appBackground}
      initialRouteName="Home"
      borderTopLeftRight
      screenOptions={{
        headerShown: false,
      }}
      renderCircle={() => (
        <Pressable style={styles.btnCircle} onPress={newPostNavigate}>
          <Icon
            name="plus"
            type="antdesign"
            color={colors.primary}
            size={hp(3.1)}
          />
        </Pressable>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={HomeScreen}
      />
      <CurvedBottomBar.Screen
        name="Search"
        component={SearchScreen}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Notifications"
        component={NotificationScreen}
        position="RIGHT"
        // options={{
        //   headerShown: true,
        //   headerStyle: {
        //     backgroundColor: colors.appBackground,
        //   },
        //   headerShadowVisible: false,
        //   headerTitleStyle: {
        //     fontFamily: constants.fontBold,
        //     fontSize: hp(2.9),
        //   },
        // }}
      />
      <CurvedBottomBar.Screen name="My Site" position="RIGHT">
        {({navigation, route}) =>
          MySiteNavigation({navigation, route, enableTabBar})
        }
      </CurvedBottomBar.Screen>
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  bottomBar: {
    elevation: 10,
    shadowColor: colors.primary,
  },
  btnCircle: {
    width: hp(8),
    height: hp(8),
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
    bottom: hp(3),
  },
});
