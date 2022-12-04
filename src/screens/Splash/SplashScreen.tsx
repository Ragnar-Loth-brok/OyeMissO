import React, {useCallback} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import {StackNavigationProp} from '@react-navigation/stack';
//
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {SplashScreenData} from '../../assets/localization/default';
import colors from '../../assets/colors';

import Logo from '../../assets/images/appLogo.svg';
import CustomButton from '../../components/UI/CustomButton';
import Animated, {FadeInDown, ZoomIn} from 'react-native-reanimated';

const SCALE_FACTOR = wp(100) / 360;

export default function SplashScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const authNavigation = useCallback(
    (login: boolean) => {
      navigation.navigate('Auth', {screen: login ? 'Signin' : 'Signup'});
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.appBackground}
      />
      <Animated.View entering={ZoomIn.springify()} style={{marginTop: hp(42)}}>
        <Logo style={{transform: [{scale: SCALE_FACTOR}]}} />
      </Animated.View>
      <Animated.View entering={FadeInDown.springify()}>
        <CustomButton
          title={SplashScreenData.loginText}
          revert={true}
          onPress={() => authNavigation(true)}
        />
        <CustomButton
          title={SplashScreenData.getStarted}
          revert={false}
          onPress={() => authNavigation(false)}
        />
        <View style={styles.subTextContainer}>
          <Text style={styles.text}>{SplashScreenData.termsText}</Text>
          <Text style={styles.text}>{SplashScreenData.privacyText}</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flex: 1,
    backgroundColor: colors.appBackground,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoStyle: {
    transform: [
      {
        scale: SCALE_FACTOR,
      },
    ],
    marginTop: hp(42),
  },
  subTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  text: {
    fontSize: hp(2),
    color: colors.iconColor,
    padding: hp(1),
    marginHorizontal: wp(2),
  },
});
