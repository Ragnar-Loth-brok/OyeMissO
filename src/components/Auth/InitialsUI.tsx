import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  name: string;
};

export default function InitialsUI({name = 'ZM'}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.initialText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: hp(15),
    height: hp(15),
    borderRadius: hp(7.5),
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: colors.primary,
    marginVertical: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialText: {
    fontSize: hp(4),
    fontFamily: constants.fontMedium,
    color: colors.primary,
  },
});
