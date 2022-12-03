import {Text} from '@rneui/themed';
import React, {useCallback} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import {useNavigation} from '@react-navigation/native';
import {EmailAddressDataScreen} from '../../assets/localization/default';
import CustomInput from '../../components/Auth/CustomInput';
import NextButton from '../../components/UI/NextButton';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function EmailAddress() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const emailVerifyNavigation = () => {
    navigation.navigate('EmailVerfication');
  };
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.appBackground} />
      <DefaultHeader goBack={goBack} text={null} title="" />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>{EmailAddressDataScreen.heading}</Text>
        <Text style={styles.message}>{EmailAddressDataScreen.message}</Text>
        <CustomInput inputType="default" placeholder="Email" width={null} />
      </View>
      <NextButton onPress={emailVerifyNavigation} />
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
    paddingHorizontal: wp(8),
  },

  heading: {
    fontSize: hp(3.5),
    fontFamily: constants.fontMedium,
    color: colors.heading,
  },
  message: {
    // fontFamily: constants.fontMedium,
    fontSize: hp('2.1'),
    fontWeight: '600',
    color: colors.appBlack,
    marginVertical: hp(1),
    lineHeight: hp(2.8),
  },
});
