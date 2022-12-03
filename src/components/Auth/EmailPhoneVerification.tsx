import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NextButton from '../UI/NextButton';

import colors from '../../assets/colors';

export default function EmailPhoneVerification(props: {
  type: string;
  onPress: () => void;
  children: JSX.Element;
}) {
  return (
    <>
      <View style={styles.messageContainer}>
        <Text style={styles.heading}>
          {props.type === 'email' && 'Please Verify Your Email'}
          {props.type === 'phone' && 'Please Verify Your Phone Number'}
        </Text>
        <Text style={styles.message}>
          {props.type === 'phone' &&
            'For your account security we have just sent SMS to'}
          <Text style={[styles.message, {color: colors.primaryBlue}]}>
            {props.type === 'phone' && ' “+1 2345 7789 908”'}
          </Text>
          <Text style={styles.message}>
            {props.type === 'phone' &&
              ' with a  6-digit code. Please copy that code and paste in the below field.'}
          </Text>
          {props.type === 'email' &&
            'For your account security we have just sent an email to '}
          <Text style={[styles.message, {color: colors.primaryBlue}]}>
            {props.type === 'email' && ' “jackdoe@email.com”'}
          </Text>
          <Text style={styles.message}>
            {props.type === 'email' &&
              ' with a  6-digit code. Please copy that code and paste in the below field.'}
          </Text>
        </Text>
        {props.type === 'email' && (
          <Text style={styles.note}>
            Note: If you do not see the email in your inbox, then see your spam
            folder.
          </Text>
        )}
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
    marginTop: '25%',
  },
  heading: {
    marginVertical: hp('2.5%'),
    fontSize: wp('7%'),
    // fontFamily: constants.fontBold,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
  message: {
    // fontFamily: constants.fontMedium,
    fontWeight: '600',
    fontSize: wp('4%'),
    color: colors.heading,
  },
  inputContainer: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: '2%',
  },
  note: {
    color: colors.iconDefaultColor,
    marginTop: 20,
    fontSize: wp('4%'),
    fontWeight: '600',
  },
});
