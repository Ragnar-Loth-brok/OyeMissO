import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../../assets/constants';
import colors from '../../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type Props = {
  title: string;
  text: string;
  bottom: string;
};
export default function BottomTextComponent(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.centertext}>{props.text}</Text>
      <Text style={styles.buttontext}>{props.bottom}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: wp(5), marginLeft: wp(5)},
  text: {
    fontSize: wp(5),
    fontFamily: constants.fontBold,
    color: colors.appBlack,
  },
  centertext: {fontSize: wp(3.5), lineHeight: 20, color: colors.textPrimary},
  buttontext: {
    fontSize: wp(5),
    color: colors.primaryDefault,
    textAlign: 'center',
    marginTop: wp(10),
    fontFamily: constants.fontBold,
  },
});
