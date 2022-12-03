import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomSheet, Button, TabView} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {BillingScreenData} from '../../assets/localization/default';

import CustomInput from '../../components/Auth/CustomInput';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import DefaultModal from '../../components/Overlay/DefaultModal';
import CustomButton from '../../components/UI/CustomButton';
import Strip from '../../components/UI/Strip';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function InvitationMethod() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const appStyle = useMemo(() => {
    return {
      tabOneTitle: [
        {color: index === 0 ? colors.iconColor : colors.iconDefaultColor},
        styles.tabTitle,
      ],
      tabTwoTitle: [
        {color: index === 1 ? colors.iconColor : colors.iconDefaultColor},
        styles.tabTitle,
      ],
      tabOneContainer: [
        {
          backgroundColor:
            index === 0 ? colors.appBackground : colors.textColor,
          width: '50%',
        },
      ],
      tabTwoContainer: [
        {
          backgroundColor:
            index === 1 ? colors.appBackground : colors.textColor,
          width: '50%',
        },
      ],
    };
  }, [index]);

  const toggleModal = () => {
    setModal(val => !val);
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <Strip text="" width="100%" />
      <Text style={styles.heading}>{BillingScreenData.invitefriend}</Text>
      <View style={styles.tabContainer}>
        <Button
          title="By Email"
          type="clear"
          onPress={() => {
            setIndex(0);
          }}
          radius={wp(5)}
          titleStyle={appStyle.tabOneTitle}
          containerStyle={appStyle.tabOneContainer}
        />
        <Button
          title="By Phone"
          type="clear"
          onPress={() => {
            setIndex(1);
          }}
          radius={wp(5)}
          titleStyle={appStyle.tabTwoTitle}
          containerStyle={appStyle.tabTwoContainer}
        />
      </View>
      <TabView
        disableSwipe
        value={index}
        onChange={setIndex}
        animationConfig={{
          useNativeDriver: true,
          duration: 320,
          bounciness: 3,
        }}>
        <TabView.Item>
          <View style={styles.subContainer}>
            <Text style={styles.textPrimary}>{BillingScreenData.email}</Text>
            <CustomInput
              inputType="default"
              placeholder="Email"
              width={wp(92)}
            />
            <Text style={styles.textSecondary}>{BillingScreenData.add}</Text>
          </View>
        </TabView.Item>
        <TabView.Item>
          <View style={styles.subContainer}>
            <Text style={styles.textPrimary}>{BillingScreenData.phone}</Text>
            <CustomInput
              inputType="default"
              placeholder="Phone Number"
              width={wp(92)}
            />
            <Text style={styles.textSecondary}>{BillingScreenData.add}</Text>
          </View>
        </TabView.Item>
      </TabView>
      <CustomButton
        title="Send Invitation"
        onPress={toggleModal}
        revert={false}
      />
      <BottomSheet
        isVisible={modal}
        onBackdropPress={toggleModal}
        backdropStyle={{backgroundColor: colors.modalBackgroundColor}}>
        <DefaultModal
          type="update"
          buttonText="OK"
          message="Your invite is sent to your friends successfully."
          title="Invite Sent"
          onPress={toggleModal}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    paddingBottom: hp(2),
  },
  subContainer: {
    marginVertical: hp(2),
    marginHorizontal: wp(4),
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: 30,
    marginLeft: wp(1),
    paddingVertical: wp(2),
  },
  inputStyle: {
    fontSize: wp(4),
    marginLeft: 15,
    color: colors.textgrey,
  },
  inputContainer: {
    marginTop: wp(6),
  },
  heading: {
    fontSize: hp(2.5),
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
  },
  textPrimary: {
    fontSize: hp(2.1),
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    marginBottom: hp(2),
  },
  tabTitle: {
    fontSize: hp(1.6),
    // fontFamily: constants.fontMedium,
    letterSpacing: 0.5,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 4,
    marginHorizontal: wp(4),
    backgroundColor: colors.textColor,
    borderRadius: wp(8),
    marginTop: hp(3),
  },
  textSecondary: {
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    fontSize: hp(1.8),
    marginVertical: hp(0.8),
    alignSelf: 'flex-end',
  },
});
