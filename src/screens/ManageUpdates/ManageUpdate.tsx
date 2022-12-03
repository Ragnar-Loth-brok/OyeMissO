import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BottomSheet, Button} from '@rneui/themed';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import StripHeader from '../../components/Headers/StripHeader';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import Strip from '../../components/UI/Strip';
import AnimatedContainer from '../../components/ManageUpdates/AnimatedContainer';
import CustomButton from '../../components/UI/CustomButton';
import OptionDropDown from '../../components/UI/OptionDropDown';
import DefaultModal from '../../components/Overlay/DefaultModal';
import CustomSwitch from '../../components/UI/CustomSwitch';
import Animated, {Layout} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ManageScreenData} from '../../assets/localization/default';

const OPTIONS = ['Last 30 Days', 'Last 15 Days', 'Last Week'];
const DAYS_OPTIONS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function ManageUpdate() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(val => !val);
  };
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader title="" text={null} goBack={goBack} />
      <StripHeader title={ManageScreenData.manageheader} />
      <Animated.ScrollView
        layout={Layout}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scollviewContent}>
        <AnimatedContainer heading={ManageScreenData.quick} open={true}>
          <Text style={styles.textPrimary}>{ManageScreenData.subscribe}</Text>
          <Strip text={null} width="100%" />
          <Text style={styles.subHeading}>{ManageScreenData.daytext}</Text>
          <OptionDropDown options={OPTIONS} placeholder="Select Days" />
          <Text style={styles.textSecondary}>
            {ManageScreenData.PublishedText}
          </Text>
          <CustomButton
            title={ManageScreenData.quickbuttonText}
            onPress={toggleModal}
            revert={false}
          />
        </AnimatedContainer>
        <AnimatedContainer heading={ManageScreenData.scheduleText} open={false}>
          <View style={[styles.subContainer, styles.containerMargin]}>
            <View>
              <Text style={[styles.subHeading, styles.subHeadingPrimary]}>
                {ManageScreenData.scheduleText}
              </Text>
              <Text
                style={[styles.textSecondary, styles.textSecondaryAlternate]}>
                {ManageScreenData.EnabledText}
              </Text>
            </View>
            <Button
              title={ManageScreenData.DisabledText}
              type="clear"
              radius={wp(10)}
              titleStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
            />
          </View>
          <Text style={styles.textPrimary}>
            {ManageScreenData.scheduleHeader}
          </Text>
          <Strip text={null} width="100%" />
          <Text style={styles.subHeading}>
            {ManageScreenData.AutomaticText}
          </Text>
          <Text style={styles.textPrimary}>
            {ManageScreenData.updateText}
            <Text style={{fontFamily: constants.fontBold}}>
              {ManageScreenData.pacificText}
            </Text>
            .
          </Text>
          <OptionDropDown options={DAYS_OPTIONS} placeholder="Select Day" />

          <Text style={styles.textSecondary}>
            {ManageScreenData.centerText}
          </Text>
          <Strip text={null} width="100%" />
          <View style={styles.subContainer}>
            <Text style={[styles.subHeading, styles.textWidth]}>
              {ManageScreenData.monthlyText}
            </Text>
            <CustomSwitch
              activeBackgroundColor={colors.primary}
              toggleSwitch={null}
            />
          </View>
          <Text style={styles.textSecondary}>
            {ManageScreenData.monthlyheading}
          </Text>
          <Strip text={null} width="100%" />
          <View style={styles.subContainer}>
            <Text style={[styles.subHeading, styles.textWidth]}>
              {ManageScreenData.quarterlyText}
            </Text>
            <CustomSwitch
              activeBackgroundColor={colors.primary}
              toggleSwitch={null}
            />
          </View>
          <Text style={styles.textSecondary}>
            {ManageScreenData.quarterlyheading}
          </Text>
        </AnimatedContainer>
      </Animated.ScrollView>
      <BottomSheet
        isVisible={modal}
        onBackdropPress={toggleModal}
        backdropStyle={{backgroundColor: colors.modalBackgroundColor}}>
        <DefaultModal
          message="Your update is sent successfully."
          buttonText="OK"
          title="Updates Sent"
          type="update"
          onPress={toggleModal}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  textPrimary: {
    fontSize: hp(1.8),
    lineHeight: hp(2.8),
    color: colors.black,
    marginVertical: hp(1),
    marginBottom: hp(2.5),
  },
  subHeading: {
    fontSize: hp(1.9),
    color: colors.black,
    fontFamily: constants.fontBold,
    marginVertical: hp(1),
    lineHeight: hp(3),
  },
  textSecondary: {
    fontSize: hp(1.8),
    lineHeight: hp(2.6),
    color: colors.textPrimary,
    marginVertical: hp(2),
    letterSpacing: 0.5,
    marginBottom: hp(4),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    borderWidth: wp(0.2),
    borderColor: colors.iconColor,
  },
  buttonStyle: {
    paddingVertical: hp(1),
  },
  buttonText: {
    color: colors.iconColor,
    fontSize: hp(1.5),
    fontWeight: '100',
    letterSpacing: 0.6,
  },
  textWidth: {
    width: '70%',
  },
  scollviewContent: {
    flexGrow: 1,
  },
  containerMargin: {
    marginBottom: hp(1),
  },
  subHeadingPrimary: {
    marginVertical: 0,
  },
  textSecondaryAlternate: {
    marginVertical: 0,
    fontSize: hp(1.6),
    marginBottom: 0,
  },
});
