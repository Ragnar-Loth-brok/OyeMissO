import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Icon} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import Animated, {SlideInRight} from 'react-native-reanimated';

export default function PostHeader(props: {navigateBack: () => void}) {
  return (
    <Animated.View
      entering={SlideInRight.springify().damping(13)}
      style={styles.container}>
      <Icon
        onPress={props.navigateBack}
        size={hp(3)}
        name="keyboard-backspace"
        type="material-community"
        color={colors.appBlack}
        iconStyle={styles.icon}
      />
      <View style={styles.subContainer}>
        <Avatar
          size={hp(4.3)}
          rounded
          source={{
            uri: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
          }}
        />
        <Icon
          size={hp(1.7)}
          name="options-vertical"
          type="simple-line-icon"
          color={colors.textColor}
          reverseColor={colors.textPrimary}
          reverse
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('1'),
    paddingHorizontal: wp('1'),
    backgroundColor: colors.appBackground,
    elevation: 2,
    zIndex: 1,
    shadowColor: colors.shadowColor,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: hp(1),
    borderRadius: wp('6'),
  },
});
