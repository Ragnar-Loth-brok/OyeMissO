import {Avatar, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function UserProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Avatar
          size={wp('28%')}
          rounded
          source={{
            uri: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
          }}
        />
        <View style={styles.main}>
          <Text style={styles.heading}>The Doe Family</Text>
          <Text style={styles.message}>thedoefamily@email.com</Text>
        </View>
        <View style={styles.centermaincontainer}>
          <View style={styles.subview}>
            <Text style={styles.centertext}>15</Text>
            <Text style={styles.centerbottomtext}>Posts</Text>
          </View>
          <View style={styles.strip} />
          <View style={styles.partner}>
            <Text style={styles.partnertext}>256</Text>
            <Text style={styles.centerbottomtext}>Partners</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.joinedtext}>Date Joined</Text>
          <Text style={styles.datetext}>September 2022</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.account}>Account Based In</Text>
          <Text style={styles.kingdom}>United Kingdom</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
  },
  subcontainer: {
    backgroundColor: colors.appBackground,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: hp('60%'),
    marginTop: hp('10%'),
    elevation: wp('2%'),
    borderRadius: wp('3%'),
  },
  main: {
    justifyContent: 'center',
    marginTop: wp('5%'),
    alignItems: 'center',
    width: wp('90%'),
  },
  heading: {
    fontSize: wp('5%'),
    fontWeight: '700',
    fontFamily: constants.fontBold,
  },
  message: {
    fontSize: wp('4.3%'),
    marginVertical: hp('2%'),
    color: colors.grey,
    textAlign: 'center',
  },
  centermaincontainer: {
    flexDirection: 'row',
    width: wp('70%'),
    padding: hp('2%'),
    borderRadius: wp('1%'),
    borderWidth: wp('0.1%'),
    borderColor: colors.strip,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subview: {justifyContent: 'center', alignItems: 'center'},
  centertext: {
    fontSize: wp('5%'),
    fontWeight: '700',
    fontFamily: constants.fontBold,
    color: colors.primaryBlue,
  },
  centerbottomtext: {color: colors.grey},
  strip: {
    height: hp('6%'),
    width: wp('0.5%'),
    backgroundColor: colors.strip,
  },
  partner: {justifyContent: 'center', alignItems: 'center'},
  partnertext: {
    fontSize: wp('5%'),
    fontWeight: '700',
    fontFamily: constants.fontBold,
    color: colors.primaryBlue,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('6%'),
  },
  joinedtext: {
    marginHorizontal: wp('10%'),
    fontSize: wp('4%'),
    fontFamily: constants.fontMedium,
    color: colors.black,
  },
  datetext: {
    marginHorizontal: wp('10%'),
    fontSize: wp('4%'),
    color: colors.textPrimary,
  },
  account: {
    marginHorizontal: wp('5%'),
    fontSize: wp('4%'),
    fontFamily: constants.fontMedium,
    color: colors.black,
  },
  kingdom: {
    marginHorizontal: wp('5%'),
    fontSize: wp('4%'),
    color: colors.textPrimary,
  },
});
