import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {
  FadeInUp,
  FadeOutUp,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import colors from '../../assets/colors';

type Props = {
  options: Array<string>;
  placeholder: string;
};

type SubProps = {
  title: string;
  onPress: (title: string) => void;
  selected: string;
};

const OptionsUI = ({title, onPress, selected}: SubProps) => (
  <Pressable style={styles.optionSubContainer} onPress={() => onPress(title)}>
    <Text style={styles.title}>{title}</Text>
    {selected === title && (
      <Icon
        name="check"
        type="antdesign"
        color={colors.heading}
        size={hp(2.5)}
      />
    )}
  </Pressable>
);

export default function OptionDropDown({
  options,
  placeholder = 'Select Option',
}: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState('');
  const rotate = useSharedValue(0);

  const onSelecting = useCallback((title: string) => {
    setSelected(title);
    setTimeout(() => {
      setIsEnabled(val => !val);
    }, 100);
  }, []);

  useEffect(() => {
    rotate.value = isEnabled
      ? withTiming(1, {duration: 150})
      : withTiming(0, {duration: 150});
  }, [isEnabled, rotate]);

  const rotateFunction = useCallback(() => {
    setIsEnabled(val => !val);
  }, []);

  const rotationStyle = useAnimatedStyle(() => {
    const rotation = interpolate(rotate.value, [0, 1], [0, -180]);
    return {
      transform: [{rotateZ: `${rotation}deg`}],
    };
  }, [rotate.value]);

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={rotateFunction}
        onBlur={rotateFunction}>
        <Text style={styles.title}>
          {selected ? (
            selected
          ) : (
            <Text style={{color: colors.placeholder}}>{placeholder}</Text>
          )}
        </Text>
        <Animated.View style={rotationStyle}>
          <Icon
            name="downarrow"
            type="custom-icon"
            color={colors.heading}
            size={hp(1.2)}
          />
        </Animated.View>
      </Pressable>
      <View style={styles.subContainer}>
        {isEnabled && (
          <Animated.ScrollView
            entering={FadeInUp.duration(150)}
            exiting={FadeOutUp.duration(150)}
            style={styles.optionsContainer}
            contentContainerStyle={styles.optionsContentContainer}>
            {options.map((item, index) => (
              <OptionsUI
                onPress={onSelecting}
                title={item}
                selected={selected}
                key={index}
              />
            ))}
          </Animated.ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    paddingHorizontal: wp(2),
  },
  title: {
    fontSize: hp(1.8),
    color: colors.black,
  },
  subContainer: {
    backgroundColor: colors.appBackground,
    borderRadius: wp(2),
    zIndex: 5,
  },
  optionsContainer: {
    position: 'absolute',
    width: '100%',
    elevation: 10,
    shadowColor: colors.shadowColor,
    backgroundColor: colors.appBlack,
    borderRadius: wp(2),
  },
  optionsContentContainer: {
    backgroundColor: colors.appBackground,
    overflow: 'hidden',
    borderRadius: wp(2),
  },
  optionSubContainer: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: colors.border,
  },
});
