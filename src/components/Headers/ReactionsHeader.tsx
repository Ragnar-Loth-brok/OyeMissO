import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function ReactionsHeader(props: {
  title: string;
  goBack: () => void;
}) {
  return (
    <View style={styles.container}>
      <Icon
        onPress={props.goBack}
        size={hp(2.9)}
        name="close"
        type="ant-design"
        color={colors.appBlack}
        iconStyle={styles.icon}
      />
      <Text style={styles.title}>{props.title}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('1'),
    paddingHorizontal: wp('4'),
    backgroundColor: colors.appBackground,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  title: {
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    fontSize: hp(2.2),
  },
  icon: {
    padding: hp('1'),
    borderRadius: hp('3'),
  },
});
