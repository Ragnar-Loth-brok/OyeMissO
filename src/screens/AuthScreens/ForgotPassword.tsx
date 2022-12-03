import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

import AuthVerification from '../../components/Auth/AuthVerification';
import NextButton from '../../components/UI/NextButton';
import {ForgotScreenData} from '../../assets/localization/default';
import CustomInput from '../../components/Auth/CustomInput';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function ForgotPassword() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const resetNavigation = () => {
    navigation.navigate('Reset');
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <AuthVerification
        type="forgot"
        heading={ForgotScreenData.heading}
        message={ForgotScreenData.message}
      />
      <View style={styles.subContainer}>
        <CustomInput placeholder="Email" inputType="default" width={null} />
        <NextButton onPress={resetNavigation} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
  },
  subContainer: {
    alignSelf: 'center',
    paddingVertical: hp(4),
  },
});
