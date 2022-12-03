import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CheckBox, Icon} from '@rneui/themed';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

import colors from '../../assets/colors';

type Props = {
  id: number;
  selectedOption: number;
  title: string;
  setOption: (id: number) => void;
};

export default function UpdateCheckBox({
  id,
  title,
  setOption,
  selectedOption,
}: Props) {
  const [check, setCheck] = React.useState(false);
  const zoom = useSharedValue(1);

  const zoomStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: zoom.value}],
    };
  }, []);

  const onPress = () => {
    setOption(id);
  };

  useEffect(() => {
    if (selectedOption === id) {
      setCheck(true);
      zoom.value = withSequence(withSpring(1.3), withSpring(1));
    } else {
      setCheck(false);
      zoom.value = 1;
    }
  }, [selectedOption, id, zoom]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Animated.View style={zoomStyle}>
        <CheckBox
          containerStyle={styles.checkboxContainer}
          checkedIcon={
            <Icon
              name="checkmark-circle-sharp"
              type="ionicon"
              color={colors.primary}
              size={hp('3')}
            />
          }
          uncheckedIcon={
            <Icon
              name="ios-radio-button-off"
              type="ionicon"
              color={colors.primary}
              size={hp('3')}
            />
          }
          checked={check}
          onPress={onPress}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('1.2'),
  },
  title: {
    fontSize: hp(2),
    color: colors.appBlack,
  },
  checkboxContainer: {
    padding: 0,
    margin: 0,
  },
});
