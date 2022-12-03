import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function PaymentComponent(props: {
  text: string;
  title: string;
  line: string;
  BillingScreen: boolean;
}) {
  // Added LinearGradient Library
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#CACCCD', '#FFFFFF']}
        style={styles.gradientContainer}>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.Basic}>{props.title}</Text>
        <Text style={{...styles.text, fontSize: hp('1.6')}}>{props.line}</Text>
        {props.BillingScreen && (
          <Button
            radius={wp('30%')}
            type="clear"
            title="Change Plan"
            titleStyle={styles.loginTitle}
            buttonStyle={styles.loginButton}
            containerStyle={styles.buttonContainerStyle}
          />
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: hp('2'),
    marginHorizontal: wp(4),
  },
  gradientContainer: {
    borderRadius: wp(5),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  text: {
    color: colors.iconColor,
    marginVertical: hp('1'),
    fontSize: hp('1.8'),
  },
  Basic: {
    fontSize: hp('3.2%'),
    fontFamily: constants.fontMedium,
    color: colors.iconColor,
    marginVertical: hp('0.5'),
  },
  buttonContainerStyle: {
    width: hp('18'),
    marginVertical: hp(1),
  },
  loginTitle: {
    color: colors.iconColor,
    fontSize: hp('1.9'),
    fontFamily: constants.fontBold,
  },
  loginButton: {
    backgroundColor: colors.appBackground,
    paddingVertical: hp('0.8'),
  },
});
