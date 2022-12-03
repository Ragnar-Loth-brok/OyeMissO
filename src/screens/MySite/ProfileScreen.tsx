import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, BottomSheet, Divider, Icon, Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {ProfileScreenData} from '../../assets/localization/default';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

import CustomSwitch from '../../components/UI/CustomSwitch';
import ProfileButton from '../../components/UI/ProfileButton';
import DefaultModal from '../../components/Overlay/DefaultModal';
import {useNavigation} from '@react-navigation/native';

import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import Setting from '../../assets/icons/setting.svg';
import Outlinebill from '../../assets/icons/outlinebill.svg';

export default function ProfileScreen() {
  const [switchOn, setSwitchOn] = React.useState(false);
  const [modal, setModal] = useState(false);
  const stackNavigation = useNavigation<StackNavigationProp<any>>();

  const navigateScreen = (screen: string) => {
    stackNavigation.navigate(screen);
  };

  const toggleModal = () => {
    setModal(val => !val);
  };

  const toggleSwitch = () => {
    'worklet';
    setSwitchOn(previousState => !previousState);
    setModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader
        goBack={() => stackNavigation.goBack()}
        text={null}
        title=""
      />
      <ScrollView
        style={styles.scrollviewStyle}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View>
            <Avatar
              size={wp('33%')}
              rounded
              source={{
                uri: 'https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              }}
              containerStyle={{marginBottom: hp(2.5)}}
            />
            <Icon
              name="camera"
              type="evilicon"
              size={wp(6)}
              color={colors.white}
              backgroundColor={colors.iconReverseColor}
              iconStyle={{
                padding: wp(2),
                borderRadius: wp(6),
              }}
              containerStyle={styles.iconContainer}
            />
          </View>
          <Text style={styles.heading}>{ProfileScreenData.name}</Text>
          <Text style={styles.message}>{ProfileScreenData.email}</Text>
          <View style={styles.centermaincontainer}>
            <View style={styles.subview}>
              <Text style={styles.subviewHeading}>15</Text>
              <Text style={styles.subviewText}>
                {ProfileScreenData.centerBox[0]}
              </Text>
            </View>
            <Divider orientation="vertical" width={0.7} color={colors.border} />
            <View style={styles.subview}>
              <Text style={styles.subviewHeading}>256</Text>
              <Text style={styles.subviewText}>
                {ProfileScreenData.centerBox[1]}
              </Text>
            </View>
          </View>
          <Divider
            orientation="horizontal"
            color={colors.border}
            width={1}
            style={styles.dividerOne}
          />
         
          <View style={styles.subcontainer}>
            <ProfileButton
              title={ProfileScreenData.buttonNames[0]}
              iconName={null}
              IconSvg={<Setting />}
              onPress={() => navigateScreen('ProfileSetting')}
            />
            <ProfileButton
              title={ProfileScreenData.buttonNames[1]}
              iconName="cil_newspaper"
              IconSvg={null}
              onPress={() => navigateScreen('SiteManagement')}
            />
            <ProfileButton
              title={ProfileScreenData.buttonNames[2]}
              iconName="carbon_update-now"
              onPress={() => navigateScreen('ManageUpdates')}
              IconSvg={null}
            />
            <ProfileButton
              title={ProfileScreenData.buttonNames[3]}
              iconName="partner"
              onPress={() => navigateScreen('Partners')}
              IconSvg={null}
            />
            <ProfileButton
              title={ProfileScreenData.buttonNames[4]}
              iconName="clock"
              onPress={() => navigateScreen('Reminder')}
              IconSvg={null}
            />
            <ProfileButton
              title={ProfileScreenData.buttonNames[5]}
              iconName={null}
              onPress={() => navigateScreen('BillingScreen')}
              IconSvg={<Outlinebill />}
            />
            <ProfileButton
              title={ProfileScreenData.buttonNames[6]}
              iconName="invitefriend"
              onPress={() => navigateScreen('inviteFriend')}
              IconSvg={null}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.private}>{ProfileScreenData.profileText}</Text>
            <CustomSwitch
              activeBackgroundColor={colors.primary}
              toggleSwitch={toggleSwitch}
            />
          </View>
          <Divider
            orientation="horizontal"
            color={colors.border}
            width={1}
            style={styles.dividerTwo}
          />
          <Text style={styles.logout}>{ProfileScreenData.logout}</Text>
        </View>
      </ScrollView>
      <BottomSheet
        isVisible={modal}
        onBackdropPress={toggleModal}
        backdropStyle={{backgroundColor: colors.modalBackgroundColor}}>
        <DefaultModal
          onPress={toggleModal}
          type={switchOn ? 'private' : 'public'}
          title={
            switchOn
              ? ProfileScreenData.privateModal
              : ProfileScreenData.publicModal
          }
          message=""
          buttonText={ProfileScreenData.modalText}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    width: wp(100),
    flex: 1,
  },
  subcontainer: {marginVertical: hp(1)},
  scrollviewStyle: {
    width: '100%',
  },
  contentStyle: {
    alignItems: 'center',
    paddingBottom: hp(15),
  },
  main: {
    marginVertical: hp('4%'),
    alignItems: 'center',
    width: wp('90%'),
  },
  iconContainer: {
    position: 'absolute',
    bottom: wp(5),
    left: wp(12),
  },
  heading: {
    fontSize: wp('4.5%'),
    fontFamily: constants.fontBold,
    paddingVertical: hp('1%'),
    color: colors.heading,
  },
  message: {
    fontSize: wp('4'),
    marginVertical: hp('1%'),
    color: colors.textPrimary,
    textAlign: 'center',
  },
  centermaincontainer: {
    flexDirection: 'row',
    width: '90%',
    padding: hp('2%'),
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: hp(1),
    marginTop: hp(2),
  },
  subview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subviewHeading: {
    fontSize: wp('5.5'),
    fontFamily: constants.fontBold,
    color: colors.iconColor,
    marginBottom: hp(0.4),
  },
  subviewText: {
    color: colors.textSecondary,
    fontSize: wp(3.8),
  },
  private: {
    fontSize: wp('4.2'),
    color: colors.iconColor,
    fontFamily: constants.fontMedium,
  },
  logout: {
    fontSize: wp('4.2'),
    color: colors.logout,
    marginLeft: wp('3%'),
    fontFamily: constants.fontMedium,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
  },
  bottomContainer: {
    width: '90%',
  },
  dividerOne: {
    width: '100%',
    marginVertical: hp(1),
  },
  dividerTwo: {
    width: '100%',
    marginVertical: hp(1.8),
  },
});
