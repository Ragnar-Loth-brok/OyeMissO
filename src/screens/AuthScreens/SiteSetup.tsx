import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from '@rneui/themed';
import {useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import CheckboxUI from '../../components/UI/CheckboxUI';
import Strip from '../../components/UI/Strip';
import constants from '../../assets/constants';
import CustomButton from '../../components/UI/CustomButton';
import CustomInput from '../../components/Auth/CustomInput';
import {SiteScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {useForm, Controller} from 'react-hook-form';
import {setSiteSetup} from '../../store/auth';

export default function SiteSetup() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [check, setCheck] = React.useState(1);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const onSubmit = handleSubmit(data => {
    dispatch(setSiteSetup({...data, siteType: check}));
    verificationNavigation();
    // console.log(data);
  });

  const selectOption = (id: number) => {
    setCheck(id);
  };

  const verificationNavigation = () => {
    navigation.navigate('Verification');
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />

      <View style={{paddingVertical: hp('2'), paddingHorizontal: wp('6.5')}}>
        <View style={[styles.subContainer]}>
          <Text style={styles.heading}>{SiteScreenData.siteText}</Text>
          <View style={styles.topcontainer}>
            <Text style={styles.emailtext}>{SiteScreenData.emailText}</Text>
          </View>
        </View>
        <View style={[styles.subContainer, styles.checkboxContainer]}>
          <Text style={styles.sitetext}>{SiteScreenData.middleText}</Text>
          <CheckboxUI
            title={SiteScreenData.justText}
            id={1}
            selectOption={selectOption}
            checkId={check}
          />
          <Strip text={null} width="100%" />
          <CheckboxUI
            title={SiteScreenData.FamilyText}
            id={2}
            selectOption={selectOption}
            checkId={check}
          />
        </View>
        <View style={[styles.subContainer]}>
          <Controller
            control={control}
            name="title"
            render={({field: {onChange, value, onBlur}}) => (
              <CustomInput
                inputType="default"
                placeholder="Site Title"
                width="100%"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                keyboardType="default"
              />
            )}
          />
          <View style={styles.bottomview}>
            <View style={{flex: 1, marginRight: wp(4)}}>
              <Controller
                control={control}
                name="url"
                render={({field: {onChange, value, onBlur}}) => (
                  <CustomInput
                    inputType="default"
                    placeholder="Choose Site URL"
                    width="100%"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    keyboardType="default"
                  />
                )}
              />
            </View>
            <Button
              title="Missio.app"
              titleStyle={{color: colors.iconColor, fontSize: hp(2.1)}}
              buttonStyle={styles.missioStyle}
              containerStyle={styles.missioContainer}
            />
          </View>
          <Text style={styles.siteurl}>{SiteScreenData.siteurlText}</Text>
          <Controller
            control={control}
            name="desc"
            render={({field: {onChange, value, onBlur}}) => (
              <CustomInput
                placeholder="Site's Short Description"
                inputType="default"
                width="100%"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                keyboardType="default"
              />
            )}
          />
        </View>
      </View>
      <CustomButton
        title={SiteScreenData.buttontitle}
        revert={false}
        onPress={onSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    width: wp(100),
  },
  subContainer: {
    marginVertical: hp('1.8'),
  },
  heading: {
    fontSize: hp(3.5),
    textTransform: 'capitalize',
    marginVertical: hp(2),
    letterSpacing: 0.8,
    color: colors.heading,
    fontFamily: constants.fontMedium,
  },
  topcontainer: {
    alignSelf: 'flex-start',
  },
  emailtext: {
    backgroundColor: colors.border,
    borderRadius: hp(2),
    paddingHorizontal: hp('2'),
    paddingVertical: hp('0.5%'),
    fontSize: hp('1.9'),
    color: colors.primary,
  },
  sitetext: {
    fontSize: hp('2.2'),
    marginHorizontal: wp('3'),
    fontFamily: constants.fontMedium,
  },
  bottomview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  siteurl: {
    marginBottom: '7%',
    fontSize: hp(1.9),
    color: colors.appBlack,
  },

  checkboxContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: wp(3),
    paddingTop: hp(2),
    paddingBottom: hp(1),
    borderRadius: wp('3%'),
  },
  missioStyle: {
    backgroundColor: colors.textColor,
    paddingVertical: hp(2.2),
    paddingHorizontal: hp(2),
  },
  missioContainer: {
    borderRadius: hp(34),
  },
});
