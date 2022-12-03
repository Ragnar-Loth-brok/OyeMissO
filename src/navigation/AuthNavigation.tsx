import React from 'react';
import SignIn from '../screens/AuthScreens/SignIn';

import {createStackNavigator} from '@react-navigation/stack';

import ResetPassword from '../screens/AuthScreens/ResetPassword';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import PhoneNumber from '../screens/AuthScreens/PhoneNumber';
import EmailAddress from '../screens/AuthScreens/EmailAddress';
import AvatarScreen from '../screens/AuthScreens/AvatarScreen';
import SignUp from '../screens/AuthScreens/SignUp';
import EmailVerification from '../screens/AuthScreens/EmailVerification';
import PhoneVerification from '../screens/AuthScreens/PhoneVerification';
import SiteSetup from '../screens/AuthScreens/SiteSetup';
import Verification from '../screens/AuthScreens/Verification';
import AccountVerified from '../screens/AuthScreens/AccountVerified';
import colors from '../assets/colors';
import {Animated} from 'react-native';

type RootStackParamList = {
  Signin: undefined;
  Reset: undefined;
  Forgot: undefined;
  Signup: undefined;
  Phone: undefined;
  Email: undefined;
  Avatar: undefined;
  EmailVerfication: undefined;
  PhoneVerification: undefined;
  SiteSetup: undefined;
  Verification: undefined;
  AccountVerified: undefined;
};

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

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

export default function AuthNavigation() {
  // Todo -  header back logo change according to the figma
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator,
        // transitionSpec: {
        //   open: {
        //     animation: 'spring',
        //     config: {
        //       stiffness: 1000,
        //       damping: 50,
        //       mass: 3,
        //       overshootClamping: false,
        //       restDisplacementThreshold: 0.01,
        //       restSpeedThreshold: 0.01,
        //     },
        //   },

        //   close: {
        //     animation: 'spring',
        //     config: {
        //       stiffness: 1000,
        //       damping: 50,
        //       mass: 3,
        //       overshootClamping: false,
        //       restDisplacementThreshold: 0.09,
        //       restSpeedThreshold: 0.09,
        //     },
        //   },
        // },
        // headerBackImageSource: () => (
        //   <Icon
        //     name="left-arrow"
        //     type="custom-icons"
        //     color={colors.appBlack}
        //     size={40}
        //   />
        // ),
      }}>
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="Reset" component={ResetPassword} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Phone" component={PhoneNumber} />
      <Stack.Screen name="Email" component={EmailAddress} />
      <Stack.Screen name="Avatar" component={AvatarScreen} />
      <Stack.Screen name="EmailVerfication" component={EmailVerification} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="SiteSetup" component={SiteSetup} />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerStyle: {backgroundColor: colors.checkboxBg}}}
      />
      <Stack.Screen name="AccountVerified" component={AccountVerified} />
    </Stack.Navigator>
  );
}
