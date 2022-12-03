import React from 'react';
import {Button, Icon} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  onPress: () => void;
};

export default function NextButton({onPress}: Props) {
  return (
    <Button
      title="Next "
      onPress={onPress}
      type="clear"
      radius={wp(15)}
      icon={
        <Icon
          size={hp(2)}
          name="arrow_forward_ios_24px"
          color={colors.appBackground}
          type="custom-icon"
        />
      }
      iconPosition="right"
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
    />
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: hp(2.4),
    fontFamily: constants.fontBold,
    color: colors.appBackground,
  },
  buttonStyle: {
    paddingVertical: hp(1.5),
  },
  containerStyle: {
    marginVertical: hp(0.8),
    width: wp(87),
    alignSelf: 'center',
    elevation: 15,
    shadowColor: colors.shadowColor,
    backgroundColor: colors.primary,
  },
});
