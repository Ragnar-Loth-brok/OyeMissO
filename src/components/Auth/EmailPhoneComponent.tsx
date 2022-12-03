import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NextButton from '../UI/NextButton';

export default function EmailPhoneComponent(props: {
  type: string;
  onPress: () => void;
  children: JSX.Element;
}) {
  return (
    <>
      <View style={styles.messageContainer}>
        <Text style={styles.heading}>
          {props.type === 'phone' && 'What’s your phone number?'}
          {props.type === 'email' && 'What’s your email?'}
        </Text>
        <Text style={styles.message}>
          {props.type === 'phone' && 'Enter your US phone number.'}
          {props.type === 'email' &&
            'We will send a verification code to your email.'}
        </Text>
      </View>
      <View style={styles.inputContainer}>{props.children}</View>
      <View style={styles.buttonContainer}>
        <NextButton onPress={props.onPress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    width: wp('90%'),
    marginTop: hp('12%'),
  },
  heading: {
    marginVertical: '3%',
    fontSize: wp('7%'),
    // fontFamily: constants.fontBold,
    fontWeight: '700',
  },
  message: {
    // fontFamily: constants.fontMedium,
    fontSize: wp('4.2%'),
    fontWeight: '600',
  },
  inputContainer: {
    width: wp('95%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  buttonContainer: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
});
