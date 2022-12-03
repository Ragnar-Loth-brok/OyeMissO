import {View, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import {Text} from '@rneui/themed';
import constants from '../../assets/constants';

type Props = {
  title: string;
};

export default function WelcomeText({title}: Props) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.greetingText}>[Greeting]</Text>
      <Text style={styles.text}>
        {title} <Text style={styles.subtext}>{constants.appName}</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  text: {
    marginTop: hp(0.7),
    color: colors.textSecondary,
    fontSize: hp(2.2),
    fontFamily: constants.fontMedium,
  },
  subtext: {
    color: colors.primary,
    fontFamily: constants.fontBold,
  },
  greetingText: {
    color: colors.appBlack,
    fontSize: hp(4),
    fontFamily: constants.fontMedium,
  },
});
