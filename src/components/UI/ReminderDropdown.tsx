import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Icon, Text} from '@rneui/themed';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

type Props = {
  title: string;
  selected: string;
  onPress: (title: string) => void;
};

export default function ReminderDropdown({title, selected, onPress}: Props) {
  return (
    <Pressable onPress={() => onPress(title)} style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: hp(2),
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: hp(1.9),
    color: colors.black,
  },
});
