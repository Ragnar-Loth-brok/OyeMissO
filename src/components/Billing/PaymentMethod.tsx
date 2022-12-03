import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import Cardlogo from '../../assets/images/cardlogo.svg';
import Strip from '../UI/Strip';

export default function PaymentMethod(props: {data: Array<string>}) {
  const data = props.data;
  let isEmpty = data.length > 0 ? false : true;
  // let isEmpty = true;
  let data1 = [
    {
      cnumber: '1234567898761234',
    },
  ];

  let last4 = data1[0].cnumber.substring(12, 16);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      {!isEmpty && (
        <View style={styles.subContainer}>
          <Cardlogo />
          <Text style={styles.cardNumber}>{`.... .... .... ${last4}`}</Text>
        </View>
      )}
      <Strip text="" width="100%" />
      {!isEmpty ? (
        <View style={styles.bottomview}>
          <Button
            radius={wp('30%')}
            title="Change Card"
            titleStyle={styles.loginTitle}
            buttonStyle={styles.loginButton}
            containerStyle={styles.buttonContainerStyle}
          />
          <Button
            radius={wp('30%')}
            title="Remove"
            titleStyle={styles.loginTitle}
            buttonStyle={[styles.loginButton, {backgroundColor: 'transparent'}]}
            containerStyle={styles.buttonContainerStyle}
          />
        </View>
      ) : (
        <Button
          radius={wp('30%')}
          title="Add Card"
          titleStyle={styles.loginTitle}
          buttonStyle={styles.loginButton}
          containerStyle={styles.addCardButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textColor,
    justifyContent: 'center',
    marginHorizontal: wp(4),
    borderRadius: wp(5),
    paddingHorizontal: wp(4),
  },
  subContainer: {
    flexDirection: 'row',
    paddingBottom: hp(1),
  },
  title: {
    fontSize: hp(2.3),
    fontFamily: constants.fontBold,
    marginVertical: hp(2),
    color: colors.iconColor,
  },
  cardNumber: {
    fontSize: hp(2.4),
    color: colors.textPrimary,
    fontFamily: constants.fontBold,
    marginLeft: wp(4),
  },
  buttonContainerStyle: {
    width: '49%',
    marginVertical: hp('2'),
  },
  loginTitle: {
    color: colors.iconColor,
    fontSize: hp('1.8'),
    fontFamily: constants.fontBold,
  },
  loginButton: {
    backgroundColor: colors.appBackground,
    paddingVertical: hp('0.8'),
  },
  bottomview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomtext: {
    color: colors.iconColor,
    fontSize: wp('4%'),
    fontFamily: constants.fontBold,
    marginRight: wp(16),
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: colors.border,
    marginLeft: wp(5),
  },
  addCardButton: {
    marginVertical: hp('2'),
  },
});
