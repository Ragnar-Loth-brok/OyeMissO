import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from '@rneui/themed';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Sentlogo from '../../assets/images/Sentlogo.svg';
import {ManageScreenData} from '../../assets/localization/default';

export default function Manage() {
  return (
    <View style={styles.container}>
      <View style={styles.modalStrip} />
      <View style={styles.subcontainer}>
        <Sentlogo />
        <Text style={styles.updatetext}>{ManageScreenData.Update}</Text>
        <Text style={styles.message}>{ManageScreenData.Success}</Text>
        <Text style={styles.text}>{ManageScreenData.modalText}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
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
    fontSize: wp('5%'),
    fontFamily: constants.fontBold,
    marginLeft: wp('1%'),
    marginVertical: hp('1.5%'),
    textAlign: 'center',
  },

  subcontainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  message: {
    fontSize: wp('4%'),
    marginVertical: hp('0.1%'),
    color: colors.textPrimary,
    textAlign: 'center',
  },
  text: {
    fontSize: wp('5%'),
    fontFamily: constants.fontBold,
    marginLeft: wp('1%'),
    marginTop: hp('5%'),
    textAlign: 'center',
  },
});
