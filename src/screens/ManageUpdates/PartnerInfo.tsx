import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Text, Button, Icon} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import {ManageScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import Strip from '../../components/UI/Strip';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Commentgrey from '../../assets/icons/commentgrey.svg';
import Frame from '../../assets/icons/Frame.svg';

export default function PartnerInfo() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader title="" text={null} goBack={goBack} />
      <Strip text="" width="100%" />

      <View style={styles.subcontainer}>
        <Avatar
          size={hp('15')}
          rounded
          source={{
            uri: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
          }}
        />
        <Text style={styles.username}>{ManageScreenData.username}</Text>
        <Text style={styles.emailText}>{ManageScreenData.useremail}</Text>
        <Button
          radius={wp('30%')}
          title="visit site"
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
          icon={{
            name: 'rightarrow',
            type: 'custom-icon',
            size: hp(1.2),
            color: 'black',
          }}
          iconRight
        />
      </View>
      <Strip text="" width="100%" />
      <Text style={styles.heading}>{ManageScreenData.info}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{ManageScreenData.subtext}</Text>
        <Text style={styles.textSecondary}>{ManageScreenData.date}</Text>
      </View>
      <Strip text="" width="100%" />
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{ManageScreenData.daily}</Text>
        <Text style={styles.textSecondary}>{ManageScreenData.dailytext}</Text>
      </View>
      <Strip text="" width="100%" />
      <Text style={styles.heading}>{ManageScreenData.Engage}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{ManageScreenData.Comment}</Text>
        <View style={styles.numberview}>
          <Commentgrey style={styles.commenttext} />
          <Text style={styles.textSecondary}>60</Text>
        </View>
      </View>

      <Strip text="" width="100%" />
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{ManageScreenData.Open}</Text>
        <View style={styles.numberview}>
          <Frame style={styles.commenttext} />
          <Text style={styles.textSecondary}>20</Text>
        </View>
      </View>
      <Strip text="" width="100%" />

      <Button
        radius={wp(15)}
        title="Remove"
        type="outline"
        containerStyle={styles.bottomContainerStyle}
        buttonStyle={styles.bottomStyle}
        titleStyle={styles.bottomTitleStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  subcontainer: {
    marginVertical: hp(3),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailText: {
    fontSize: hp(1.75),
    color: colors.textPrimary,
  },
  buttonContainerStyle: {
    // width: wp('30%'),
    marginBottom: hp('1'),
    marginTop: hp('2.5'),
  },
  buttonStyle: {
    paddingVertical: hp('2.0'),
    paddingHorizontal: hp('2.7'),
    backgroundColor: colors.border,
  },
  buttonTitleStyle: {
    fontSize: hp('1.7'),
    fontFamily: constants.fontMedium,
    color: colors.iconColor,
  },
  heading: {
    fontSize: hp(1.8),
    color: colors.heading,
    fontFamily: constants.fontBold,
    marginLeft: wp(4),
    marginVertical: hp(1),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.8),
    alignItems: 'center',
    marginHorizontal: wp(4),
    marginTop: hp(3),
  },
  username: {
    fontSize: hp(2.3),
    fontFamily: constants.fontBold,
    marginTop: hp(2.5),
    marginBottom: hp(2),
    color: colors.heading,
  },
  textPrimary: {
    color: colors.heading,
    fontSize: hp(1.8),
  },
  textSecondary: {
    color: colors.textPrimary,
    fontSize: hp(1.8),
  },
  bottomContainerStyle: {
    width: wp('90%'),
    marginVertical: hp('3%'),
    alignSelf: 'center',
  },
  bottomStyle: {
    borderColor: colors.logout,
    borderWidth: 1,
    paddingVertical: hp(1.3),
  },
  bottomTitleStyle: {
    fontSize: hp('2.2'),
    fontFamily: constants.fontBold,
    textAlign: 'center',
    color: colors.logout,
  },
  numberview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commenttext: {paddingHorizontal: wp(3)},
});
