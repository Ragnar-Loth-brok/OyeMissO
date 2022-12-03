import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import constants from '../../assets/constants';
import {BillingScreenData} from '../../assets/localization/default';

type Props = {
  status: string;
};

export default function InvitationCard({status}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>{BillingScreenData.Emailtext}</Text>
      <Text style={styles.textSecondary}>{BillingScreenData.Date}</Text>
      <View style={styles.subcontainer}>
        <Text style={[styles.textSecondary]}>
          Status:{'  '}
          {status}
        </Text>
        <Text style={[styles.textPrimary, {fontSize: hp(1.9)}]}>
          {BillingScreenData.resend}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textColor,
    marginHorizontal: wp('4'),
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
    paddingTop: hp(1),
    marginVertical: hp(1),
    borderRadius: wp(3),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSecondary: {
    color: colors.placeholder,
    fontSize: hp(1.7),
    letterSpacing: 0.6,
    marginTop: hp(1),
  },
  textPrimary: {
    fontSize: hp(1.7),
    marginTop: hp(1),
    color: colors.heading,
    fontFamily: constants.fontBold,
  },
});
