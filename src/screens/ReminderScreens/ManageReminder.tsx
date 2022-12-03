import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import CustomButton from '../../components/Overlay/CustomButton';
import ReminderPost from '../../components/Reminder/ReminderPost';
import StripHeader from '../../components/Headers/StripHeader';

export default function ManageReminder() {
  const btnClicked = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <StripHeader title="Manage Posts Reminders" />
      <View style={styles.centerview}>
        <ReminderPost
          text="Reminder for friday post"
          type="Friday, Septmeber 2, 2022 12:00 pm"
        />
        <ReminderPost
          text="Monthly Post"
          type="Tuesday, August 30, 2022 5:00 pm"
        />
        <ReminderPost
          text="Reminder for post"
          type="Tuesday, August 30, 2022 5:00 pm"
        />
      </View>
      <View style={styles.bottomview}>
        <CustomButton title=" Add New Reminder" onClicked={btnClicked} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  subcontainer: {
    height: hp(10),
    marginVertical: hp(8),
  },
  centerview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(20),
    height: hp(28),
  },
  bottomview: {
    elevation: wp('5%'),
    position: 'absolute',
    bottom: 0,
  },
});
