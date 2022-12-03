import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Hashtag() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#hashtag</Text>
      <Text style={styles.text}>#hashtag</Text>
      <Text style={styles.text}>#hashtag</Text>
      <Text style={styles.text}>#hashtag</Text>
      <Text style={styles.text}>#hashtag</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp(2),
  },
  text: {
    textAlign: 'center',
    color: colors.appBackground,
    fontSize: hp('1.8'),
    fontFamily: constants.fontMedium,
    letterSpacing: 0.9,
    backgroundColor: colors.primary,
    padding: hp('1.2'),
    borderRadius: hp('1.5'),
    marginHorizontal: wp(1),
    marginVertical: hp(1),
  },
});
