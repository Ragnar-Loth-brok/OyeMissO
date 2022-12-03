import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default function AvatarBox(props: {
  id: number;
  selectedId: number;
  children: JSX.Element;
}) {
  const animate = useSharedValue(colors.appBackground);

  useEffect(() => {
    if (props.selectedId === props.id) {
      console.log(props.selectedId);
      animate.value = colors.primary;
    } else {
      animate.value = colors.appBackground;
    }
  }, [props.selectedId, animate, props.id]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: animate.value,
    };
  }, [animate.value]);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      {props.children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('23%'),
    height: wp('23%'),
    borderRadius: wp('4%'),
    marginVertical: '1%',
    marginHorizontal: '2%',
  },
});
