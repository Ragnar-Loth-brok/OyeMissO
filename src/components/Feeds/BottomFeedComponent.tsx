import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Icon} from '@rneui/themed';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Animated, {SlideInDown} from 'react-native-reanimated';
import HandPray from '../../assets/icons/handpray.svg';
import Handraise from '../../assets/icons/handraise.svg';
import Heart from '../../assets/icons/heart.svg';
import Commentstroke from '../../assets/icons/commentstroke.svg';

export default function BottomFeedComponent() {
  return (
    <Animated.View
      entering={SlideInDown.delay(100).springify().damping(25)}
      style={styles.container}>
      <View style={styles.subcontainer}>
        <HandPray />
        <Text style={styles.text}>15</Text>
      </View>
      <View style={styles.subcontainer}>
        <Heart />
        <Text style={styles.text}>25K</Text>
      </View>
      <View style={styles.subcontainer}>
        <Handraise />
        <Text style={styles.text}>24</Text>
      </View>
      <View style={styles.subcontainer}>
        <Commentstroke />
        <Text style={styles.text}>23</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.appBackground,
    // paddingHorizontal: wp('4'),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: hp('20'),
    // width: wp('100'),
    elevation: 10,
    shadowColor: colors.shadowColor,
    borderTopEndRadius: wp(7),
    borderTopStartRadius: wp(7),
    paddingTop: hp(1.8),
    paddingBottom: hp(2.2),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.hand,
    fontFamily: constants.fontLight,
    fontSize: hp('2%'),
    paddingHorizontal: wp(2),
  },
});
