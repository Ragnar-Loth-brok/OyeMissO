import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Animated, {SlideInRight} from 'react-native-reanimated';

type Props = {
  title: string;
  goBack: () => void;
  text: {
    title: string;
    color: string;
    onPress: () => void;
  } | null;
};

export default function DefaultHeader({title, text, goBack}: Props) {
  return (
    <Animated.View
      entering={SlideInRight.springify().damping(16)}
      style={styles.container}>
      <Icon
        onPress={goBack}
        size={hp(3)}
        name="keyboard-backspace"
        type="material-community"
        color={colors.appBlack}
        iconStyle={styles.icon}
      />

      {/* <Backarrow /> */}
      {title && <Text style={styles.title}>{title}</Text>}
      {text && text.title && (
        <Text onPress={text.onPress} style={[styles.text, {color: text.color}]}>
          {text.title}
        </Text>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
    paddingHorizontal: wp(1),
    backgroundColor: 'transparent',
  },
  title: {
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    fontSize: hp(3),
  },
  text: {
    marginRight: wp(3),
    fontSize: hp(1.8),
    padding: hp(1),
    // fontFamily: constants.fontMedium,
  },
  icon: {
    padding: hp(1),
    borderRadius: wp('6'),
  },
});
