import {Button, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Publish from '../../assets/images/Publish.svg';

export default function Published() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Publish />
        <View style={styles.main}>
          <Text style={styles.heading}>Published!</Text>
          <Text style={styles.message}>{constants.publishMessage}</Text>
          <Text style={styles.time}>(Tuesday night at 12am PST)</Text>
        </View>
        <Button
          radius={30}
          title="Add another Post"
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />

        <Button
          radius={30}
          size="lg"
          type="outline"
          title="Go to Home"
          titleStyle={styles.loginTitle}
          buttonStyle={styles.loginButton}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    marginTop: hp('13%'),
  },
  main: {
    justifyContent: 'center',
    marginTop: '10%',
    alignItems: 'center',
    width: wp('90%'),
  },
  heading: {
    fontSize: wp('8%'),
    letterSpacing: 0.7,
    fontWeight: '700',
  },
  message: {
    fontSize: wp('4.3%'),
    marginVertical: '3%',
    color: colors.iconDefaultColor,
    textAlign: 'center',
  },
  time: {
    fontSize: wp('4.3%'),
    marginVertical: '3%',
    color: colors.primary,
  },
  buttonContainerStyle: {
    width: '100%',
    elevation: 10,
    marginVertical: '6%',
  },
  buttonStyle: {
    paddingVertical: 10,
  },
  buttonTitleStyle: {
    fontSize: wp('5%'),
    fontFamily: constants.fontBold,
  },
  loginTitle: {
    color: colors.textblack,
    fontSize: 18,
    letterSpacing: 0.8,
    fontWeight: '700',
    fontFamily: constants.fontLight,
  },
  loginButton: {
    borderColor: colors.textblack,
    borderWidth: 1,
    backgroundColor: colors.appBackground,
  },
  buttonContainer: {
    // marginVertical: 1,
    width: '100%',
  },
});
