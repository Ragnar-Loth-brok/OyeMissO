import React, {useCallback, useEffect, useState} from 'react';
import {Icon, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {
  FadeInUp,
  FadeOutUp,
  interpolate,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import constants from '../../assets/constants';
import colors from '../../assets/colors';

type Props = {
  heading: string;
  children: React.ReactNode;
  open: boolean;
};

export default function AnimatedContainer({
  heading,
  children,
  open = false,
}: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = isEnabled
      ? withTiming(1, {duration: 250})
      : withTiming(0, {duration: 250});
  }, [isEnabled, rotate]);

  const rotateFunction = useCallback(() => {
    setIsEnabled(val => !val);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        rotateFunction();
      }, 100);
    }
  }, [open, rotateFunction]);

  const rotationStyle = useAnimatedStyle(() => {
    const rotation = interpolate(rotate.value, [0, 1], [0, -180]);
    return {
      transform: [{rotateZ: `${rotation}deg`}],
    };
  }, [rotate.value]);
  return (
    <Animated.View layout={Layout.duration(250)}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingStyle}>{heading}</Text>
        <Animated.View style={rotationStyle}>
          <Icon
            name="downarrow"
            type="custom-icon"
            color={colors.heading}
            size={hp(1.2)}
            iconStyle={styles.chevronStyle}
            onPress={rotateFunction}
          />
        </Animated.View>
      </View>
      {isEnabled && (
        <Animated.View
          style={styles.subContainer}
          entering={FadeInUp.duration(250)}
          exiting={FadeOutUp.duration(250)}>
          {children}
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: hp(1.5),
    marginTop: hp(2),
  },
  headingStyle: {
    fontSize: hp(2.2),
    color: colors.black,
    fontFamily: constants.fontBold,
  },
  chevronStyle: {
    padding: hp(0.5),
    borderRadius: wp(6),
  },
  subContainer: {
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2.5),
    backgroundColor: colors.textColor,
    borderRadius: wp(3),
  },
});
