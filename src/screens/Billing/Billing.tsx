import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {BillingScreenData} from '../../assets/localization/default';
import Billinghistory from '../../components/Billing/Billinghistory';
import PaymentComponent from '../../components/Billing/PaymentComponent';
import PaymentMethod from '../../components/Billing/PaymentMethod';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';

export default function Billing() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title={BillingScreenData.heading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(5)}}>
        <PaymentComponent
          text={BillingScreenData.currentText}
          title={BillingScreenData.centerText}
          line={BillingScreenData.nextpaymentText}
          BillingScreen={true}
        />
        <PaymentMethod data={['']} />
        <Text style={styles.heading}>{BillingScreenData.history}</Text>
        <Billinghistory />
        <Billinghistory />
        <Billinghistory />
      </ScrollView>
      {/* <CustomButton title="Purchase Plan" onPress={() => {}} revert={false} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  heading: {
    fontSize: hp(2.3),
    color: colors.iconColor,
    fontFamily: constants.fontBold,
    marginHorizontal: wp(4),
    marginTop: hp(1),
  },
});
