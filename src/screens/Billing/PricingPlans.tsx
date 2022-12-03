import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import constants from '../../assets/constants';
import CustomButton from '../../components/Overlay/CustomButton';
import {Icon} from '@rneui/themed';
import {BillingScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import Strip from '../../components/UI/Strip';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function PricingPlans() {
  const [isMonthly, setIsMonthly] = useState(true);
  const btnClicked = () => {};
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const PaymentMethodScreen = useCallback(() => {
    navigation.navigate('PaymentMethodScreen');
  }, [navigation]);
  return (
    <SafeAreaView style={styles.Container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <Strip text="" width="100%" />
      <Text style={styles.heading}>{BillingScreenData.PricePlan}</Text>
      <Text style={styles.title}>{BillingScreenData.monthlyplan}</Text>

      <Pressable
        onPress={() => setIsMonthly(true)}
        style={[
          styles.cardContainer,
          {borderColor: isMonthly ? colors.iconColor : colors.border},
        ]}>
        <View style={styles.subContainer}>
          <Text style={styles.subHeading}>{BillingScreenData.monthPay}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.dollar}>{BillingScreenData.dollar}</Text>
            <Text style={styles.number}>{BillingScreenData.digit}</Text>
            <Text style={styles.planText}>{BillingScreenData.monthtext}</Text>
          </View>
        </View>
      </Pressable>

      <Pressable
        onPress={() => setIsMonthly(false)}
        style={[
          styles.cardContainer,
          {borderColor: isMonthly ? colors.border : colors.iconColor},
        ]}>
        <View
          style={[
            styles.starHeaderContainer,
            {
              backgroundColor: isMonthly ? colors.border : colors.appBlack,
            },
          ]}>
          <Icon
            name="star-o"
            type="font-awesome"
            color={isMonthly ? colors.appBlack : colors.appBackground}
            size={hp('2')}
          />
          <Text
            style={[
              styles.offerText,
              {color: isMonthly ? colors.appBlack : colors.appBackground},
            ]}>
            {' '}
            {BillingScreenData.savetext}
          </Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subHeading}>{BillingScreenData.Annualpay}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.dollar}>{BillingScreenData.dollar}</Text>
            <Text style={styles.number}>{BillingScreenData.number}</Text>
            <Text style={styles.planText}>{BillingScreenData.yeartext}</Text>
          </View>
          <View style={styles.reducedPriceContainer}>
            <Text style={styles.strikeThroughText}>
              {BillingScreenData.dollardigit}
            </Text>
            <Text style={styles.alternateOffer}>
              {'  '}
              {BillingScreenData.dollarmonth}
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>{BillingScreenData.terms}</Text>
        <Text style={styles.termsText}>{BillingScreenData.privacy}</Text>
      </View>

      <View style={styles.bottomview}>
        <CustomButton title="Subscribe" onClicked={PaymentMethodScreen} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.appBackground,
    flex: 1,
  },
  heading: {
    fontSize: hp(2.7),
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    marginHorizontal: wp(8),
    marginVertical: hp(1.5),
  },
  title: {
    fontSize: hp(1.8),
    color: colors.iconDefaultColor,
    textAlign: 'center',
  },
  cardContainer: {
    marginHorizontal: wp(6),
    borderRadius: wp(5),
    borderWidth: 1,
    marginTop: hp(2),
    overflow: 'hidden',
  },
  subContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  subHeading: {
    fontSize: hp(1.8),
    color: colors.appBlack,
  },
  dollar: {
    fontSize: hp(2.2),
    color: colors.appBlack,
    paddingRight: wp(1),
    fontFamily: constants.fontBold,
  },
  number: {
    fontSize: hp(4),
    color: colors.appBlack,
    fontFamily: constants.fontBold,
  },
  planText: {
    color: colors.iconDefaultColor,
    fontSize: hp(1.8),
    transform: [{translateY: hp(2.5)}],
  },
  bottomview: {
    elevation: wp('5%'),
    bottom: 0,
    position: 'absolute',
  },
  yeartext: {
    color: colors.iconDefaultColor,
    paddingHorizontal: wp(2),
  },
  starHeaderContainer: {
    backgroundColor: colors.border,
    paddingVertical: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(1),
  },
  offerText: {
    textAlign: 'center',
    fontSize: hp(1.7),
    color: colors.appBlack,
  },
  reducedPriceContainer: {
    flexDirection: 'row',
    backgroundColor: colors.border,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    borderRadius: hp(1),
    marginBottom: hp(1),
    alignSelf: 'flex-start',
  },
  strikeThroughText: {
    color: colors.textPrimary,
    textDecorationLine: 'line-through',
    fontSize: hp(1.7),
  },
  alternateOffer: {
    color: colors.iconColor,
    fontSize: hp(1.7),
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5),
  },
  termsText: {
    padding: hp(1),
    color: colors.iconColor,
    marginHorizontal: wp(2),
    fontSize: hp(1.8),
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
});
