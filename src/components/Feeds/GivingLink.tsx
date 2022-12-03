import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import constants from '../../assets/constants';
import colors from '../../assets/colors';

export default function GivingLink() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.linktext}>Giving Link</Text>
      <Icon
        size={hp(2)}
        name="arrow_forward_ios_24px"
        color={colors.primary}
        type="custom-icon"
      />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('1'),
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    borderBottomWidth: 1,
    borderColor: colors.border,
  },

  linktext: {
    fontFamily: constants.fontBold,
    fontSize: hp('2.1'),
    color: colors.primary,
  },
});
