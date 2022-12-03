import React, {useCallback} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';

import AuthVerification from '../../components/Auth/AuthVerification';

import colors from '../../assets/colors';
import NextButton from '../../components/UI/NextButton';
import {VerifyScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function Verification() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const phoneNavigation = () => {
    navigation.navigate('Email');
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StatusBar backgroundColor={colors.checkboxBg} />
      <View style={styles.subContainer}>
        <AuthVerification
          type="verify"
          heading={VerifyScreenData.heading}
          message={VerifyScreenData.message}
        />
        <View style={{marginVertical: hp(3)}}>
          <NextButton onPress={phoneNavigation} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flex: 1,
    backgroundColor: colors.checkboxBg,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: hp(3),
    borderTopEndRadius: wp(8),
    borderTopStartRadius: wp(8),
    backgroundColor: colors.appBackground,
    flex: 1,
  },
  // bottomcontainer: {height: hp('3%')},
});
