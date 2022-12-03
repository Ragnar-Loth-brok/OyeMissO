import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, Icon} from '@rneui/themed';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  username: string;
  avatar: string;
  time: number | null;
};

export default function CardAvatar({avatar, time, username}: Props) {
  // Avatar UI
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Avatar size={hp('4.5')} rounded source={avatar ? {uri: avatar} : {}} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.time}>{time}h</Text>
        </View>
      </View>

      <Icon
        size={16}
        name="options-vertical"
        type="simple-line-icon"
        color={colors.textPrimary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    marginHorizontal: wp('3'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1'),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: wp('2'),
  },
  name: {
    color: colors.black,
    fontFamily: constants.fontMedium,
    letterSpacing: 0.8,
    fontSize: hp('1.9'),
  },
  time: {
    color: colors.textPrimary,
    fontFamily: constants.fontLight,
    fontSize: hp('1.6 '),
  },
});
