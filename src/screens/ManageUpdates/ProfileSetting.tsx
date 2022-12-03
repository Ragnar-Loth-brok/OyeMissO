import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Avatar, Button, Icon, TabView, Text} from '@rneui/themed';
import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../../assets/colors';
import {
  ManageScreenData,
  ProfileScreenData,
} from '../../assets/localization/default';

import CustomInput from '../../components/Auth/CustomInput';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/UI/CustomButton';
import Strip from '../../components/UI/Strip';

export default function ProfileSetting() {
  const [index, setIndex] = useState(0);

  const onBtnClick = () => {
    index === 0 ? save() : update();
  };

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

  const save = () => {
    // console.log('m save');
  };
  const update = () => {
    // console.log('m update');
  };
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader text={null} goBack={goBack} title="" />
      <StripHeader title="Profile Setting" />
      <View style={styles.tabContainer}>
        <Button
          title="Details"
          type="clear"
          onPress={() => {
            setIndex(0);
          }}
          radius={wp(5)}
          titleStyle={appStyle.tabOneTitle}
          containerStyle={appStyle.tabOneContainer}
        />
        <Button
          title="Password"
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
          <View style={styles.searchCardContainer}>
            <View style={styles.avatarContainer}>
              <Avatar
                size={hp(15)}
                imageProps={{resizeMode: 'cover'}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                }}
                rounded
              />
              <Icon
                name="camera"
                type="evilicon"
                size={hp(2.6)}
                color={colors.white}
                backgroundColor={colors.iconReverseColor}
                borderRadius={hp(6)}
                iconStyle={{
                  paddingHorizontal: hp(0.5),
                  paddingVertical: hp(0.7),
                }}
                containerStyle={styles.iconContainer}
              />
            </View>
            <Text style={styles.title}>{ManageScreenData.name}</Text>
            <CustomInput inputType="default" placeholder="Name" width="100%" />
            <Text style={styles.title}>{ManageScreenData.email}</Text>
            <CustomInput inputType="default" placeholder="Email" width="100%" />
            <Strip text="" width="100%" />
          </View>
        </TabView.Item>
        <TabView.Item>
          <View style={styles.searchCardContainer}>
            <Text style={styles.title}>{ManageScreenData.current}</Text>
            <CustomInput
              inputType="password"
              placeholder="Current Password"
              width="100%"
            />
            <Text style={styles.title}>{ManageScreenData.new}</Text>
            <CustomInput
              inputType="password"
              placeholder="New Password"
              width="100%"
            />
            <Text style={styles.title}>{ManageScreenData.confirm}</Text>
            <CustomInput
              inputType="password"
              placeholder="Confirm Password"
              width="100%"
            />
            <Text style={styles.title}>{ProfileScreenData.profilesetting}</Text>
            <Strip text="" width="100%" />
          </View>
        </TabView.Item>
      </TabView>

      <CustomButton
        title={index === 0 ? 'Save' : 'Update Password'}
        onPress={onBtnClick}
        revert={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingBottom: hp(2),
  },
  searchCardContainer: {
    width: wp('100%'),
    marginVertical: hp('4%'),
    paddingHorizontal: wp(4),
  },
  tabTitle: {
    fontSize: hp(1.6),
    // fontFamily: constants.fontMedium,
    letterSpacing: 0.5,
  },
  title: {
    color: colors.textSecondary,
    fontSize: hp(1.8),
    marginVertical: hp(2),
    lineHeight: hp(2.7),
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 4,
    marginHorizontal: wp(4),
    backgroundColor: colors.textColor,
    borderRadius: wp(8),
    marginTop: hp(3),
  },
  iconContainer: {
    position: 'absolute',
    bottom: hp(0),
    left: hp(5.8),
  },
  avatarContainer: {
    alignSelf: 'center',
  },
});
