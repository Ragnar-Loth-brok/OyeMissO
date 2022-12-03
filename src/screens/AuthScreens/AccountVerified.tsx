import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Verified from '../../assets/images/verified.svg';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import CustomButton from '../../components/UI/CustomButton';
import {AccountVerifiedScreenData} from '../../assets/localization/default';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function AccountVerified() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const GotoApp = useCallback(() => {
    navigation.navigate('App');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Verified />
      <Text style={styles.heading}>{AccountVerifiedScreenData.header}</Text>
      <Text style={styles.message}>{AccountVerifiedScreenData.message}</Text>
      <CustomButton
        title={AccountVerifiedScreenData.buttonText}
        onPress={GotoApp}
        revert={false}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingHorizontal: wp(8),
    paddingVertical: hp(9),
    alignItems: 'center',
  },
  heading: {
    fontSize: hp(3.5),
    fontFamily: constants.fontMedium,
    color: colors.heading,
    marginVertical: hp(2),
  },
  message: {
    // fontFamily: constants.fontMedium,
    fontSize: hp('2'),
    fontWeight: '600',
    color: colors.appBlack,
    marginBottom: hp(2),
    lineHeight: hp(2.7),
  },
});
