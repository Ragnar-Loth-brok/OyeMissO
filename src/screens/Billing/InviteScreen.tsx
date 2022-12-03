import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {BillingScreenData} from '../../assets/localization/default';

import InvitationCard from '../../components/Billing/InvitationCard';
import StripHeader from '../../components/Headers/StripHeader';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/UI/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function InviteScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const InvitationMethod = useCallback(() => {
    navigation.navigate('InvitationMethod');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title="Invite Friends" />
      <ScrollView
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        style={styles.subcontainer}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>{BillingScreenData.invitation}</Text>
        <InvitationCard status="Pending" />
        <InvitationCard status="Pending" />
        <InvitationCard status="Accepted" />
      </ScrollView>
      <CustomButton title="Invite" onPress={InvitationMethod} revert={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingBottom: hp(2),
  },
  subcontainer: {
    paddingVertical: hp(1.5),
  },
  heading: {
    fontSize: hp(2.2),
    marginHorizontal: wp(4),
    fontFamily: constants.fontBold,
    marginBottom: hp(1),
  },
  contentContainer: {
    flexGrow: 1,
  },
});
