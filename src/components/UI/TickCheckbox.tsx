import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

type Option = 1 | 0;

type Props = {
  id: Option;
  selectedOption: number;
  setOption: (id: Option) => void;
};

export default function TickCheckbox({id, setOption, selectedOption}: Props) {
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
      zoom.value = withSequence(withSpring(1.2), withSpring(1));
    } else {
      setCheck(false);
      zoom.value = 1;
    }
  }, [selectedOption, id, zoom]);

  return (
    <Animated.View
      layout={Layout.duration(150)}
      style={[zoomStyle, {alignSelf: 'flex-end'}]}>
      <CheckBox
        checked={check}
        onPress={onPress}
        containerStyle={styles.cbContainerStyle}
        // <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color={colors.strip}
            size={hp('3.2')}
          />
        }
        // <Ionicons name="checkmark-circle-sharp" size={24} color="black" />
        checkedIcon={
          <Icon
            name="check-circle"
            type="material"
            color={colors.primaryDefault}
            size={hp('3.2')}
          />
        }
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cbTextStyle: {
    color: colors.appBlack,
    fontSize: hp('1.9'),
    fontWeight: '100',
  },
  cbContainerStyle: {
    padding: 0,
    paddingVertical: hp(0.3),
    marginBottom: hp(1),
  },
});
