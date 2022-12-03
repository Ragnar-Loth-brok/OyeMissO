import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

import {Avatar, Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  url: string;
  name: string;
  email: string;
  onPress: () => void;
};

export default function PartnersAvatar({name, email, url, onPress}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.subContainer}>
        <Avatar
          size={hp(5.6)}
          rounded
          source={{
            uri: url,
          }}
          containerStyle={styles.avatarContainer}
        />

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <Icon
        name="chevron-right"
        type="feather"
        color={colors.appBlack}
        size={hp(3)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '4.5%',
    marginTop: hp(1),
    marginHorizontal: wp(3.5),
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 2,
  },
  name: {
    fontSize: hp('2'),
    fontFamily: constants.fontBold,
    marginBottom: '2.5%',
  },
  email: {
    color: colors.grey,
    fontSize: wp('3.2'),
    marginTop: '2.5%',
  },
  avatarContainer: {
    marginRight: '9%',
  },
});
