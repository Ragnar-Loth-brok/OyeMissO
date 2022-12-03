import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import CustomInput from '../Auth/CustomInput';
import Animated, {Layout, SlideInLeft} from 'react-native-reanimated';

type Props = {
  id: number;
  selectedOption: number;
  title: string;
  placeholderText: string;
  inputVisible: Boolean;
  setOption: (id: number) => void;
};

export default function ReminderCheckBox({
  id,
  title,
  placeholderText,
  inputVisible,
  setOption,
  selectedOption,
}: Props) {
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
    <Animated.View layout={Layout.duration(150)} style={styles.checkboxview}>
      <CheckBox
        title={title}
        textStyle={styles.cbTextStyle}
        checked={check}
        onPress={onPress}
        containerStyle={styles.cbContainerStyle}
        uncheckedIcon={
          <Icon
            name="checkbox-blank-outline"
            type="material-community"
            color={colors.black}
            size={hp('2.85')}
          />
        }
        checkedIcon={
          <Icon
            name="checkbox-marked"
            type="material-community"
            color={colors.black}
            size={hp('2.85')}
          />
        }
      />
      {check && inputVisible && (
        <Animated.View entering={SlideInLeft}>
          <CustomInput
            inputType="default"
            placeholder={placeholderText}
            width="95%"
          />
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  checkboxview: {
    paddingHorizontal: wp(3),
  },
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
