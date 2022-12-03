import {Text} from '@rneui/themed';
import React, {useMemo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type Props = {
  placeholder: string;
  icon: JSX.Element;
  width: string | number | null;
};

export default function SelectInput({placeholder, icon, width}: Props) {
  const containerStyle = useMemo(
    () => [styles.ddInputContainer, {width: width ? width : '48%'}],
    [width],
  );

  return (
    <Pressable style={containerStyle}>
      <Text
        style={{
          fontSize: hp(1.9),
          color: colors.textSecondary,
        }}>
        {placeholder}
      </Text>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ddInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.textColor,
    alignItems: 'center',
    padding: hp(1.5),
    borderRadius: wp(20),
    marginVertical: hp(1),
  },
});
