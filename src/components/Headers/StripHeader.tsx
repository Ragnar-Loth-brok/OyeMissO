import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  title: string;
};

export default function StripHeader({title}: Props) {
  
  return <Text style={styles.heading}>{title}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontSize: hp(2.7),
    fontFamily: constants.fontBold,
    paddingVertical: hp(1.2),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: wp(4.2),
  },
});
