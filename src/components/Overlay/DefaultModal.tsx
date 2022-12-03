import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Verified from '../../assets/images/verified.svg';
import Private from '../../assets/images/private.svg';
import Public from '../../assets/images/public.svg';
import Document from '../../assets/images/Document.svg';
import Gave from '../../assets/images/gave.svg';
import Update from '../../assets/images/update.svg';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  onPress: () => void;
  type: string;
  message: string;
  buttonText: string;
  title: string;
};

export default function DefaultModal({
  onPress,
  title,
  type,
  message,
  buttonText,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalStrip} />
      <View style={styles.main}>
        {type === 'success' && <Verified />}
        {type === 'private' && <Private />}
        {type === 'public' && <Public />}
        {type === 'document' && <Document />}
        {type === 'gave' && <Gave />}
        {type === 'update' && <Update />}

        <Text style={styles.heading}>{title}</Text>
        {message && <Text style={styles.message}>{message}</Text>}
        <Text style={styles.buttonText} onPress={onPress}>
          {buttonText}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderTopEndRadius: wp(7),
    borderTopStartRadius: wp(7),
  },
  modalStrip: {
    width: wp(11),
    height: hp(0.8),
    backgroundColor: colors.modalStrip,
    borderRadius: wp(5),
    marginBottom: hp(3),
  },
  main: {
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  heading: {
    fontSize: hp('2.5'),
    letterSpacing: 0.2,
    marginTop: hp('2.5'),
    textAlign: 'center',
    fontFamily: constants.fontBold,
  },
  buttonText: {
    fontSize: wp('5%'),
    marginVertical: hp(4),
    marginBottom: hp(7),
    fontFamily: constants.fontBold,
    color: colors.primary,
  },
  message: {
    fontSize: hp('2'),
    color: colors.textPrimary,
    textAlign: 'center',
    marginVertical: hp(1),
    marginHorizontal: wp(6),
  },
});
