import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {BillingScreenData} from '../../assets/localization/default';

import CustomInput from '../../components/Auth/CustomInput';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import CustomButton from '../../components/UI/CustomButton';
import Strip from '../../components/UI/Strip';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function PaymentMethodScreen() {
  const btnClicked = () => {};
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DefaultHeader goBack={goBack} text={null} title="" />
        <Strip text="" width="100%" />
        <Text style={styles.heading}>{BillingScreenData.Payment}</Text>
        <CustomInput
          inputType="default"
          placeholder="Card Number"
          width={wp(91)}
        />
        <View style={styles.subContainer}>
          <Input
            placeholder="Expiry Date"
            placeholderTextColor={colors.placeholder}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            containerStyle={{width: '50%'}}
          />
          <Input
            placeholder="CVV Code"
            placeholderTextColor={colors.placeholder}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            containerStyle={{width: '50%'}}
          />
        </View>
        <CustomInput
          placeholder="Card Holder Name"
          inputType="default"
          width={wp(91)}
        />
        <Text style={styles.bottomtext}>{constants.Payment}</Text>
      </View>

      <CustomButton title="Pay Now" onPress={btnClicked} revert={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: hp(3),
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: wp(10),
    paddingVertical: hp(0.8),
  },
  inputStyle: {
    fontSize: hp(1.8),
    marginLeft: 15,
    color: colors.placeholder,
  },
  inputContainer: {
    marginTop: wp(6),
  },
  heading: {
    fontSize: hp(2.6),
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(3),
    marginTop: hp(1),
  },
  bottomtext: {
    marginHorizontal: wp(3),
    color: colors.iconDefaultColor,
    fontSize: hp(1.8),
    marginVertical: hp(1.5),
    lineHeight: hp(2.5),
  },
});
