import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Avatar, Text} from '@rneui/themed';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  url: string;
  name: string;
  text: string;
};

export default function ReactionsAvatar({name, text, url}: Props) {
  return (
    <View style={styles.container}>
      <Avatar
        size={wp('11.5')}
        rounded
        source={{
          uri: url,
        }}
      />
      <View style={styles.subContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '4.5%',
    borderBottomWidth: 1,
    borderColor: colors.strip,
    alignItems: 'center',
  },
  subContainer: {
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: wp('4.2'),
    fontFamily: constants.fontBold,
    marginBottom: wp(0.5),
  },
  title: {color: colors.grey, fontSize: wp('3.2'), marginTop: wp(0.5)},
});
