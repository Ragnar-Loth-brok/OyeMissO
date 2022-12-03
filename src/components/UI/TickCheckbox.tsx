import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import Animated, {Layout} from 'react-native-reanimated';

type Props = {
  id: number;
  selectedOption: number;
  setOption: (id: number) => void;
};

export default function TickCheckbox({id, setOption, selectedOption}: Props) {
  const [check, setCheck] = React.useState(false);

  const onPress = () => {
    setOption(id);
  };

  useEffect(() => {
    if (selectedOption === id) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [selectedOption, id]);

  return (
    <Animated.View layout={Layout.duration(150)}>
      <CheckBox
        checked={check}
        onPress={onPress}
        containerStyle={styles.cbContainerStyle}
        // <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color={colors.black}
            size={hp('2.85')}
          />
        }
        // <Ionicons name="checkmark-circle-sharp" size={24} color="black" />
        checkedIcon={
          <Icon
            name="check-circle"
            type="material"
            color={colors.black}
            size={hp('2.85')}
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
