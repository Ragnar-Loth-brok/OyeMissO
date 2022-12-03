import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Watch from '../../assets/icons/watch.svg'

type Props = {
  title: string;
  type: string;
  onPress: () => void;
};

export default function ReminderPost({title, type, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.subContainer}>
        
        <Watch/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{type}</Text>
        </View>
      </View>

      <Icon
        size={20}
        name="arrow_forward_ios_24px"
        color={colors.heading}
        type="custom-icon"
      />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp('90'),
    backgroundColor: colors.textColor,
    alignSelf: 'center',
    borderRadius: wp(4),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3.5),
    marginTop: hp(2),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp(2.2),
    alignItems: 'center',
  },
  titleContainer: {
    marginHorizontal: wp(3),
  },
  title: {
    fontSize: hp(2),
    color: colors.heading,
    fontFamily: constants.fontMedium,
  },
  subTitle: {
    fontSize: hp(1.6),
    color: colors.textSecondary,
    marginTop: '3%',
  },
});
