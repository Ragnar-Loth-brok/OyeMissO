import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';

type Props = {
  title: string;
  id: number;
  selectOption: (id: number) => void;
  checkId: number;
};

export default function CheckboxUI({title, id, selectOption, checkId}: Props) {
  return (
    <Pressable style={styles.container} onPress={() => selectOption(id)}>
      <Animated.View
        style={{
          backgroundColor: 'transparent',
          borderRadius: hp(5),
          borderWidth: 1,
          borderColor: colors.iconColor,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          width: hp(3),
          height: hp(3),
          marginRight: wp(2),
        }}>
        {checkId === id && (
          <Animated.View
            entering={ZoomIn.duration(250)}
            exiting={ZoomOut.duration(200)}
            style={{
              width: '100%',
              borderRadius: hp(5),
              flex: 1,
              backgroundColor: colors.iconColor,
            }}
          />
        )}
      </Animated.View>
      <Text style={styles.checkboxTextStyle}>{title}</Text>
      {/* <CheckBox
        title={props.title}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxTextStyle}
        checkedIcon={
          <Icon
            name="ios-radio-button-on"
            type="ionicon"
            color={colors.iconColor}
            size={hp(3.9)}
          />
        }
        uncheckedIcon={
          <Icon
            name="ios-radio-button-off"
            type="ionicon"
            color={colors.textSecondary}
            size={hp(3.9)}
          />
        }
        checked={props.checkId === props.id}
        onPress={() => {
          props.selectOption(props.id);
        }}
      /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    // margin: 0,
    // padding: 0,
    flexDirection: 'row',
    paddingVertical: hp(1),
  },
  checkboxContainer: {
    margin: 0,
    paddingHorizontal: 0,
    transform: [{translateX: -wp('1')}],
  },
  checkboxTextStyle: {
    fontWeight: '100',
    color: colors.primary,
    fontSize: hp(2),
    // fontFamily: constants.fontMedium,
  },
});
