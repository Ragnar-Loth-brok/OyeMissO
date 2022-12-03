import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Google from '../../assets/images/google.svg';
import Apple from '../../assets/images/apple.svg';
import Strip from '../UI/Strip';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  optionText: string;
  alternateText: string;
  alternateTextOption: string;
  onPress: () => void;
};

export default function AuthOptions({
  optionText,
  alternateText,
  alternateTextOption,
  onPress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Strip text={optionText} width={'85%'} />
        <View style={styles.authOptionsContainer}>
          <Button
            type="clear"
            radius={wp(8)}
            buttonStyle={styles.socialIconStyle}
            containerStyle={styles.socialIconContainer}
            title={<Google />}
          />
          <Button
            type="clear"
            radius={wp(8)}
            buttonStyle={styles.socialIconStyle}
            containerStyle={styles.socialIconContainer}
            title={<Apple />}
          />
        </View>
      </View>
      <Text onPress={onPress} style={styles.alternateText}>
        {alternateText}{' '}
        <Text style={styles.alternateTextOption}>{alternateTextOption}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4),
  },
  subContainer: {
    alignItems: 'center',
  },
  authOptionsContainer: {
    flexDirection: 'row',
    paddingVertical: hp(4.5),
    alignItems: 'center',
  },
  alternateText: {
    color: colors.appBlack,
    marginBottom: hp(3),
    fontSize: hp(2),
    // fontFamily: constants.fontMedium,
  },
  alternateTextOption: {
    color: colors.primary,
    fontFamily: constants.fontMedium,
  },
  socialIconContainer: {
    marginHorizontal: hp(0.8),
  },
  socialIconStyle: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: hp(2),
    paddingHorizontal: hp(8),
  },
});
