import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Text} from '@rneui/themed';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Delete from '../../assets/images/delete.svg';

export default function DeleteModal() {
  return (
    <View style={styles.container}>
      <View style={styles.modalStrip} />
      <Delete />
      <Text style={styles.updatetext}>Delete?</Text>
      <Text style={styles.message}>{constants.delete}</Text>

      <View style={styles.buttonview}>
        <Button
          radius={wp('30%')}
          title="YES"
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
        <Button
          radius={wp('30%')}
          size="lg"
          type="outline"
          title="NO"
          titleStyle={styles.loginTitle}
          buttonStyle={styles.loginButton}
          containerStyle={styles.buttonContainerStyle}
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
    fontSize: wp('5'),
    fontFamily: constants.fontBold,
    marginVertical: hp('0.8'),
    marginTop: hp('2'),
    textAlign: 'center',
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
    marginVertical: hp(2),
  },

  message: {
    fontSize: wp('4.2%'),
    marginTop: hp('0.5%'),
    marginBottom: hp('1'),
    // fontFamily: constants.fontLight,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
