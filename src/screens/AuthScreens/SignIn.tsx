import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
//
import {StackNavigationProp} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useForm, Controller} from 'react-hook-form';
import colors from '../../assets/colors';

import WelcomeText from '../../components/Auth/WelcomeText';
import AuthOptions from '../../components/Auth/AuthOptions';
import CustomInput from '../../components/Auth/CustomInput';
import CustomButton from '../../components/UI/CustomButton';
import {SignInScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';

export default function LoginScreen() {
  // const navigation = useNavigation<StackNavigationProp<any>>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const navigateToScreen = useCallback(
    (routeName: string) => {
      navigation.navigate(routeName);
    },
    [navigation],
  );

  const onSubmit = handleSubmit(data => {
    // dispatch(setSignInData(data));
    navigateToScreen('App');
    // console.log(data);
  });

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <View style={styles.subContainer}>
        <WelcomeText title={SignInScreenData.welcomeText} />
        <View style={styles.inputViewStyle}>
          <Controller
            control={control}
            name="email"
            // rules={{
            //   required: {
            //     value: true,
            //     message: 'This field is required',
            //   },
            //   pattern: {
            //     value: constants.emailRegex,
            //     message: constants.emailErrorMessage,
            //   },
            // }}
            render={({field: {onChange, value, onBlur}}) => (
              <CustomInput
                placeholder="Email"
                inputType="default"
                width={null}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                keyboardType="default"
                // error={errors[name]}
              />
            )}
          />
          <Controller
            control={control}
            name="passowrd"
            // rules={{
            //   required: {
            //     value: true,
            //     message: 'This field is required',
            //   },
            //   pattern: {
            //     value: constants.passRegex,
            //     message: constants.passErrorMessage,
            //   },
            // }}
            render={({field: {onChange, value, onBlur}}) => (
              <CustomInput
                placeholder="Password"
                inputType="password"
                width={null}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                keyboardType="default"
                // error={errors[name]}
              />
            )}
          />
          <Text
            onPress={() => navigateToScreen('Forgot')}
            style={styles.forgotPass}>
            {SignInScreenData.forgotPass}
          </Text>
        </View>
        <CustomButton
          onPress={onSubmit}
          revert={false}
          title={SignInScreenData.buttonText}
        />
      </View>
      <AuthOptions
        optionText={SignInScreenData.optionText}
        alternateText={SignInScreenData.alternateText}
        alternateTextOption={SignInScreenData.alternateTextOption}
        onPress={() => navigateToScreen('Signup')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    flex: 1,
  },
  subContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  inputViewStyle: {
    marginTop: hp(2),
  },
  forgotPass: {
    color: colors.textSecondary,
    alignSelf: 'flex-end',
    fontSize: hp(2),
    marginBottom: hp(3),
    // fontFamily: constants.fontMedium,
  },
});
