import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Icon, Text} from '@rneui/themed';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {AppGuideData} from '../../assets/localization/default';

export default function Getting() {
  return (
    <View style={styles.container}>
      <View style={styles.gave}>
        <View style={styles.subcontainer}>
          <Icon
            name="clock"
            type="feather"
            color={colors.primaryDefault}
            size={wp('4%')}
          />
          <Text style={styles.message}>{AppGuideData.heading}</Text>
        </View>

        <Text style={styles.updatetext}>{constants.Getting}</Text>
        <Text style={styles.text}>{AppGuideData.bottomText}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    // backgroundColor: colors.border,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updatetext: {
    fontSize: wp('6.5%'),
    fontFamily: constants.fontBold,
    marginLeft: wp('1%'),
    marginVertical: hp('3%'),
    textAlign: 'center',
    width: wp('50%'),
    lineHeight: 35,
  },
  gave: {
    position: 'absolute',
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    paddingVertical: hp('6%'),
    width: '100%',
    borderTopRightRadius: wp(10),
    borderTopLeftRadius: wp(10),
  },
  message: {
    fontSize: wp('3%'),
    marginVertical: hp('2%'),
    color: colors.primaryDefault,
    textAlign: 'center',
    paddingHorizontal: wp(1),
    fontFamily: constants.fontMedium,
  },
  text: {
    fontSize: wp('4%'),
    marginVertical: hp('2%'),
    color: colors.primaryDefault,
    textAlign: 'center',
    fontFamily: constants.fontBold,
  },
});
