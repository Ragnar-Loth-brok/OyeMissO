import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useForm, Controller} from 'react-hook-form';

import colors from '../../assets/colors';
import {SignUpScreenData} from '../../assets/localization/default';

import WelcomeText from '../../components/Auth/WelcomeText';
import AuthOptions from '../../components/Auth/AuthOptions';
import CustomInput from '../../components/Auth/CustomInput';
import CustomButton from '../../components/UI/CustomButton';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import constants from '../../assets/constants';
import {useDispatch} from 'react-redux';
import {setSignupData} from '../../store/auth';
import {ScrollView} from 'react-native-gesture-handler';

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const navigateToScreen = useCallback(
    (routeName: string) => {
      navigation.navigate(routeName);
    },
    [navigation],
  );

  const onSubmit = () => {
    navigateToScreen('Avatar');
  };

  // const onSubmit = handleSubmit(data => {
  //   dispatch(setSignupData(data));
  // });

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  console.log(errors);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <ScrollView
        style={{width: wp(100)}}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <WelcomeText title={SignUpScreenData.welcomeText} />
          <View style={styles.inputViewStyle}>
            <Controller
              control={control}
              name="username"
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
              }}
              render={({field: {onChange, value, onBlur, name}}) => (
                <CustomInput
                  placeholder="Name"
                  inputType="default"
                  width={null}
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  keyboardType="default"
                  error={errors[name]?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: constants.emailRegex,
                  message: constants.emailErrorMessage,
                },
              }}
              render={({field: {onChange, value, onBlur, name}}) => (
                <CustomInput
                  placeholder="Email"
                  inputType="default"
                  width={null}
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  keyboardType="default"
                  error={errors[name]?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="passowrd"
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: constants.passRegex,
                  message: constants.passErrorMessage,
                },
              }}
              render={({field: {onChange, value, onBlur, name}}) => (
                <CustomInput
                  placeholder="Password"
                  inputType="password"
                  width={null}
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  keyboardType="default"
                  error={errors[name]?.message}
                />
              )}
            />
          </View>

          <CustomButton onPress={onSubmit} revert={false} title="Sign Up" />
        </View>
        <Text style={styles.signUpText}>{SignUpScreenData.termsText}</Text>
        <AuthOptions
          optionText={SignUpScreenData.optionText}
          alternateText={SignUpScreenData.alternateText}
          alternateTextOption={SignUpScreenData.alternateTextOption}
          onPress={() => navigateToScreen('Signin')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: colors.appBackground,
    flex: 1,
  },
  subContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp(1),
  },
  inputViewStyle: {
    marginTop: hp(2),
  },
  signUpText: {
    width: '90%',
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: hp(1.9),
    marginTop: hp(2),
  },
});
