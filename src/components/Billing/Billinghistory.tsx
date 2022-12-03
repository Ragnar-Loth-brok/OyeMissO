import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import constants from '../../assets/constants';
import {BillingScreenData} from '../../assets/localization/default';

export default function Billinghistory() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.text}>{BillingScreenData.idname}</Text>
        <Text style={styles.text}>{BillingScreenData.time}</Text>
      </View>
      <Text style={styles.title}>{BillingScreenData.idcode}</Text>
      <View style={styles.subcontainer}>
        <Text style={styles.bottom}>{BillingScreenData.month}</Text>
        <Text style={styles.bottom}>{BillingScreenData.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textColor,
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.textSecondary,
    fontSize: hp(1.5),
    letterSpacing: 0.9,
  },
  title: {
    fontSize: hp(1.5),
    fontFamily: constants.fontMedium,
    color: colors.black,
    letterSpacing: 0.9,
    marginVertical: hp(1),
  },
  bottom: {
    color: colors.heading,
    fontFamily: constants.fontBold,
    fontSize: hp(1.6),
    marginTop: hp(1),
    letterSpacing: 0.7,
  },
});
