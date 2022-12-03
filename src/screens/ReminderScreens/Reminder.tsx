import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import Animated, {Layout} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import ReminderCheckBox from '../../components/Reminder/ReminderCheckBox';
import ReminderPost from '../../components/Reminder/ReminderPost';
import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/UI/CustomButton';
import {ReminderScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function Reminder() {
  const [selectedOption, setSelectedption] = useState(0);

  const setOption = (id: number) => {
    setSelectedption(id);
  };

  const navigation = useNavigation<StackNavigationProp<any>>();

  const navigateHandler = useCallback(
    (screen: string) => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DefaultHeader title="" text={null} goBack={goBack} />
        <StripHeader title="Reminder Settings" />
        <Text style={styles.subTitle}>{ReminderScreenData.Send}</Text>
        <ReminderCheckBox
          id={0}
          selectedOption={selectedOption}
          setOption={setOption}
          title={ReminderScreenData.notification}
          placeholderText=""
          inputVisible={false}
        />
        <ReminderCheckBox
          id={1}
          title={ReminderScreenData.placeholder}
          placeholderText="Email"
          inputVisible={true}
          setOption={setOption}
          selectedOption={selectedOption}
        />
        <ReminderCheckBox
          id={2}
          title={ReminderScreenData.text}
          placeholderText="Phone Number"
          inputVisible={true}
          setOption={setOption}
          selectedOption={selectedOption}
        />

        <ReminderCheckBox
          id={3}
          title="None"
          placeholderText=""
          inputVisible={false}
          setOption={setOption}
          selectedOption={selectedOption}
        />
        <Animated.View
          layout={Layout.duration(150)}
          style={styles.subContainer}>
          <StripHeader title="Custom Reminder" />
          <ReminderPost
            title={ReminderScreenData.friday}
            type={ReminderScreenData.day}
            onPress={() => navigateHandler('EditReminder')}
          />
          <ReminderPost
            title={ReminderScreenData.month}
            type={ReminderScreenData.date}
            onPress={() => navigateHandler('EditReminder')}
          />
        </Animated.View>
      </View>
      <CustomButton
        title={ReminderScreenData.title}
        onPress={() => navigateHandler('CustomReminder')}
        revert={false}
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
  subContainer: {
    marginVertical: hp(1),
  },
  subTitle: {
    fontSize: hp(2),
    color: colors.datecolor,
    paddingHorizontal: wp(4),
    fontFamily: constants.fontBold,
    marginVertical: hp(1.4),
  },
});
