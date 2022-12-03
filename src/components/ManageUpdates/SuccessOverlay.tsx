import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {ManageScreenData} from '../../assets/localization/default';

import Successlogo from '../../assets/images/Successlogo.svg';

type Props = {
  onPress: () => void;
};

export default function SuccessOverlay({onPress}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalStrip} />
      <View style={styles.main}>
        <Successlogo />
        <Text style={styles.heading}>{ManageScreenData.Add}</Text>
        <Text style={styles.message}>{ManageScreenData.partner}</Text>
        <Text style={styles.buttonText} onPress={onPress}>
          {ManageScreenData.modalText}
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
  },
});
