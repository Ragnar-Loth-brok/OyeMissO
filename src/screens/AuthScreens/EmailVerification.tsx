import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import CustomInput from '../../components/Auth/CustomInput';
import NextButton from '../../components/UI/NextButton';
import {EmailVerificationScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function EmailVerification() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const phoneVerifyNavigation = () => {
    navigation.navigate('AccountVerified');
  };
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <View style={{paddingHorizontal: wp(8), paddingVertical: hp(6.5)}}>
        <Text style={styles.heading}>
          {EmailVerificationScreenData.emailVerificationText}
        </Text>
        <Text style={styles.message}>
          {EmailVerificationScreenData.account}
          <Text
            style={{color: colors.primary, fontFamily: constants.fontMedium}}>
            {' '}
            {EmailVerificationScreenData.useremail}{' '}
          </Text>
          {EmailVerificationScreenData.codeText}
        </Text>
        <Text style={styles.note}>{EmailVerificationScreenData.note}</Text>
        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Enter code ex. 123456"
            inputType="default"
            width={null}
          />
        </View>
      </View>
      <NextButton onPress={phoneVerifyNavigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  subContainer: {
    marginVertical: hp(4),
    marginBottom: hp(20),
  },

  heading: {
    fontSize: hp(3.5),
    fontFamily: constants.fontMedium,
    color: colors.heading,
  },
  message: {
    // fontFamily: constants.fontMedium,
    fontSize: hp('2'),
    fontWeight: '600',
    color: colors.appBlack,
    marginVertical: hp(2),
    lineHeight: hp(2.7),
  },
  note: {
    color: colors.iconDefaultColor,
    fontSize: hp('2'),
    fontWeight: '600',
  },
  inputContainer: {
    marginVertical: hp(3),
  },
});
