import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import {BillingScreenData} from '../../assets/localization/default';
import PaymentComponent from '../../components/Billing/PaymentComponent';
import PaymentMethod from '../../components/Billing/PaymentMethod';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/Overlay/CustomButton';

export default function BillingScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const PricingPlans = useCallback(() => {
    navigation.navigate('PricingPlans');
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title={BillingScreenData.heading} />

      <View style={styles.subcontainer}>
        <PaymentComponent
          text={BillingScreenData.planText}
          title={BillingScreenData.freeText}
          line={BillingScreenData.missioText}
          BillingScreen={false}
        />
        <PaymentMethod data={[]} />
      </View>

      {/* <View style={styles.empty} /> */}
      <View style={styles.bottomview}>
        <CustomButton
          title={BillingScreenData.buttonpurchase}
          onClicked={PricingPlans}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  bottomview: {
    elevation: wp('5%'),
    bottom: 0,
    position: 'absolute',
  },
  subcontainer: {flex: 0.7},
});
