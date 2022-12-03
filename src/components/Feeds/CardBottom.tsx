import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Icon} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import HandPray from '../../assets/icons/handpray.svg';
import Handraise from '../../assets/icons/handraise.svg';
import Heart from '../../assets/icons/heart.svg';

const SCALE_FACTOR = hp(100) / constants.deviceDefaultHeight;

export default function CardBottom(props: {reactionsNavigate: () => void}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <HandPray style={{transform: [{scale: SCALE_FACTOR}]}} />
        <Handraise style={{transform: [{scale: SCALE_FACTOR}]}} />
        <Heart style={{transform: [{scale: SCALE_FACTOR}]}} />
      </View>
      <Text onPress={props.reactionsNavigate} style={styles.reaction}>
        820 reactions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('2'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.border,
    borderBottomWidth: 1,
    marginBottom: hp(0.5),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '35%',
  },
  reaction: {
    color: colors.primary,
    fontFamily: constants.fontMedium,
    fontSize: hp('2'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp(1.5),
  },
});
