import React, {useMemo} from 'react';
import {Button} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {StyleSheet} from 'react-native';

type Props = {
  title: string;
  revert: boolean;
  onPress: () => void;
};

export default function CustomButton({title, revert = false, onPress}: Props) {
  const memoizedStyle = useMemo(() => {
    return {
      titleStyle: [
        {color: revert ? colors.primary : colors.appBackground},
        styles.titleStyle,
      ],
      buttonStyle: {padding: revert ? hp(1.3) : hp(1.3) + 1},
      containerStyle: [
        {
          backgroundColor: revert ? colors.appBackground : colors.primary,
          borderWidth: revert ? 1 : 0,
        },
        styles.containerStyle,
      ],
    };
  }, [revert]);

  return (
    <Button
      title={title}
      onPress={onPress}
      type="clear"
      radius={wp(15)}
      titleStyle={memoizedStyle.titleStyle}
      buttonStyle={memoizedStyle.buttonStyle}
      containerStyle={memoizedStyle.containerStyle}
    />
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: hp(2.4),
    fontFamily: constants.fontBold,
  },
  containerStyle: {
    borderColor: colors.primary,
    marginVertical: hp(0.8),
    width: wp(87),
    alignSelf: 'center',
    elevation: 15,
    shadowColor: colors.shadowColor,
  },
});
