import React, {useCallback, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/UI/CustomButton';
import CustomInput from '../../components/Auth/CustomInput';
import ReminderDropdown from '../../components/UI/ReminderDropdown';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import SelectInput from '../../components/Reminder/SelectInput';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {ReminderScreenData} from '../../assets/localization/default';

const OPTIONS = ['Never', 'Weekly', 'Monthly'];

export default function CustomReminder() {
  const [toggle, setToggle] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selected, setSelected] = useState('');

  const navigation = useNavigation<StackNavigationProp<any>>();

  const onDropDown = (title: string) => {
    setToggle(false);
    setSelected(title);
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleConfirm = (date: object) => {
    console.log(typeof date);
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DefaultHeader title="" text={null} goBack={goBack} />
        <StripHeader title="Custom Reminder" />
        <View
          style={{
            width: wp(100),
            marginTop: hp(2),
            paddingHorizontal: wp(5),
          }}>
          <CustomInput
            placeholder="Reminder Title"
            inputType="default"
            width="100%"
          />
          <Text style={styles.scheduleTitle}>{ReminderScreenData.time}</Text>
          <View style={styles.scheduleContainer}>
            <SelectInput
              placeholder="Select Date"
              icon={
                <Icon
                  name="calander"
                  type="custom-icon"
                  color={colors.appBlack}
                  size={hp(3.5)}
                />
              }
              width={null}
            />
            <SelectInput
              placeholder="Select Time"
              icon={
                <Icon
                  name="clock"
                  type="custom-icon"
                  color={colors.appBlack}
                  size={hp(3.5)}
                />
              }
              width={null}
            />
          </View>
          <Text style={styles.scheduleTitle}>{ReminderScreenData.repeat}</Text>
          <Pressable
            onPress={() => setToggle(val => !val)}
            style={styles.ddInputContainer}>
            <Text
              style={{
                fontSize: hp(1.9),
                color: colors.textSecondary,
              }}>
              {selected ? (
                <Text style={{fontSize: hp(1.9), color: colors.heading}}>
                  {selected}
                </Text>
              ) : (
                'Select'
              )}
            </Text>
            <Icon
              name="downarrow"
              type="custom-icon"
              color={colors.heading}
              size={hp(1.5)}
            />
          </Pressable>
          {toggle && (
            <Animated.FlatList
              entering={FadeInUp.duration(50)}
              exiting={FadeOutUp.duration(50)}
              style={styles.dropdownContainer}
              contentContainerStyle={{
                backgroundColor: colors.white,
              }}
              data={OPTIONS}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <ReminderDropdown
                  title={item}
                  selected={selected}
                  onPress={onDropDown}
                />
              )}
            />
          )}
        </View>
      </View>

      <CustomButton
        title={ReminderScreenData.set}
        onPress={goBack}
        revert={false}
      />
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="inline"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    justifyContent: 'space-between',
    paddingBottom: hp(3),
  },
  scheduleTitle: {
    fontSize: hp(2),
    color: colors.datecolor,
    fontFamily: constants.fontBold,
  },
  scheduleContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    elevation: 10,
    shadowColor: colors.shadowColor,
    backgroundColor: colors.appBlack,
  },
  ddInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.textColor,
    alignItems: 'center',
    padding: hp(2.5),
    borderRadius: wp(20),
    marginTop: hp(1.5),
  },
});
