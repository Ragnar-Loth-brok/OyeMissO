import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

const translateValue = hp(3.5);

type Props = {
  activeBackgroundColor: string;
  toggleSwitch: (() => void) | null;
};

export default function CustomSwitch({
  activeBackgroundColor = colors.strip,
  toggleSwitch,
}: Props) {
  // const [active, setActive] = React.useState(false);

  const active = useSharedValue(false);

  const translateAnimate = useDerivedValue(() => {
    return active.value
      ? withTiming(translateValue, {duration: 100})
      : withTiming(0, {duration: 100});
  }, [active.value]);

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPress = () => {
    toggleSwitch && toggleSwitch();
    active.value = !active.value;
  };

  const trackStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: active.value ? activeBackgroundColor : colors.strip,
    };
  }, [active.value]);

  const thumbStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateAnimate.value}],
    };
  }, [translateAnimate.value]);

  const trackWrapperStyles = useMemo(
    () => [styles.track, trackStyles],
    [trackStyles],
  );

  const thumbWrapperStyles = useMemo(
    () => [styles.thumb, thumbStyles],
    [thumbStyles],
  );

  return (
    <Animated.View onTouchEnd={onPress} style={trackWrapperStyles}>
      <Animated.View style={thumbWrapperStyles} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: hp(7),
    height: hp(3.5),
    borderRadius: hp(4),
    padding: hp(0.25),
  },
  thumb: {
    width: hp(3),
    height: '100%',
    backgroundColor: colors.appBackground,
    borderRadius: hp(5),
  },
});
