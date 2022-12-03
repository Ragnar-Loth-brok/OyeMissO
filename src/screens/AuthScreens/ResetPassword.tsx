import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import AuthVerification from '../../components/Auth/AuthVerification';
import CustomInput from '../../components/Auth/CustomInput';
import CustomButton from '../../components/UI/CustomButton';
import {ResetScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function ResetPassword() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <AuthVerification
        type="reset"
        heading={ResetScreenData.heading}
        message={ResetScreenData.message}
      />
      <View style={styles.subContainer}>
        <CustomInput placeholder="Password" inputType="password" width={null} />
        <CustomInput
          placeholder="Confirm Password"
          inputType="password"
          width={null}
        />
        <CustomButton
          title={ResetScreenData.buttonText}
          onPress={() => {}}
          revert={false}
        />
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
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: 30,
  },
  inputStyle: {
    fontSize: 15,
    marginLeft: 15,
    fontFamily: constants.fontMedium,
  },
  inputContainer: {
    height: 65,
  },
});
