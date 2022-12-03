import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import ResetLogo from '../../assets/images/resetlogo.svg';
import ForgotLogo from '../../assets/images/forgotlogo.svg';
import IdentityLogo from '../../assets/images/identity.svg';
import constants from '../../assets/constants';

type Props = {
  type: 'forgot' | 'reset' | 'verify';
  heading: string;
  message: string;
};

export default function AuthVerification({type, heading, message}: Props) {
  return (
    <View style={styles.container}>
      {type === 'forgot' && <ForgotLogo style={styles.logo} />}
      {type === 'reset' && <ResetLogo style={styles.logo} />}
      {type === 'verify' && <IdentityLogo style={styles.logo} />}
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    alignItems: 'center',
  },
  logo: {
    marginVertical: hp(2),
  },
  heading: {
    marginVertical: hp(1.2),
    fontSize: hp(3.2),
    fontFamily: constants.fontBold,
    letterSpacing: 0.7,
  },
  message: {
    textAlign: 'center',
    // fontFamily: constants.fontMedium,
    fontWeight: '400',
    fontSize: hp(2.1),
  },
});
