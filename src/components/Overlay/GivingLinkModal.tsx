import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Input, Text} from '@rneui/themed';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Gave from '../../assets/images/gave.svg';

type Props = {
  onCancel: () => void;
};

export default function GivingLinkModal({onCancel}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalStrip} />
      <Gave />
      <Text style={styles.updatetext}>Giving Link</Text>

      <Input
        defaultValue="https://www.mygivinglink.com"
        selectTextOnFocus
        selectionColor={colors.modalBackgroundColor}
        // placeholder="https://www.mygivinglink.com"
        placeholderTextColor={colors.heading}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
      />

      <View style={styles.buttonview}>
        <Button
          radius={wp('30%')}
          size="lg"
          type="clear"
          title="Cancel"
          onPress={onCancel}
          titleStyle={styles.loginTitle}
          buttonStyle={styles.loginButton}
          containerStyle={styles.buttonContainerStyle}
        />
        <Button
          radius={wp('30%')}
          title="Save"
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderTopEndRadius: wp(7),
    borderTopStartRadius: wp(7),
  },
  modalStrip: {
    width: wp(11),
    height: hp(0.8),
    backgroundColor: colors.modalStrip,
    borderRadius: wp(5),
    marginBottom: hp(3),
  },
  updatetext: {
    fontSize: wp('4.5'),
    fontFamily: constants.fontBold,
    marginVertical: hp('3%'),
  },
  inputContainerStyle: {
    borderBottomWidth: wp('0%'),
    backgroundColor: colors.textColor,
    borderRadius: wp('30%'),
    width: wp(92),
  },
  inputStyle: {
    fontSize: wp('3.8%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp(2),
    // fontFamily: constants.fontMedium,
  },

  buttonContainerStyle: {
    width: wp('45%'),
    marginBottom: hp(1),
  },
  buttonStyle: {
    paddingVertical: wp('2.5'),
    backgroundColor: colors.iconColor,
  },
  buttonTitleStyle: {
    fontSize: wp('5%'),
    fontFamily: constants.fontBold,
    textAlign: 'center',
  },
  loginTitle: {
    color: colors.textblack,
    fontSize: wp('5%'),
    letterSpacing: wp('0.2%'),
    fontFamily: constants.fontBold,
  },
  loginButton: {
    borderColor: colors.textblack,
    borderWidth: wp('0.4%'),
    backgroundColor: colors.appBackground,
    paddingVertical: wp('2.5'),
  },

  buttonview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    marginBottom: hp(1),
  },
});
