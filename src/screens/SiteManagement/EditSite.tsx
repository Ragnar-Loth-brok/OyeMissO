import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../android/app/src/main/assets/custom/colors';
import {Button, Input} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/Overlay/CustomButton';
import {SiteManageData} from '../../assets/localization/default';
import StripHeader from '../../components/Headers/StripHeader';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/Auth/CustomInput';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function EditSite() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />

      <StripHeader title="Edit Site Info" />
      <Input
        placeholder="The Doe Family"
        placeholderTextColor={colors.appBlack}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />

      <View style={styles.subcontainer}>
        <Text style={styles.text}>{SiteManageData.edit}</Text>
      </View>

      <View style={styles.bottomcontainer}>
        <View style={styles.siteview}>
          <View style={{flex: 1, marginRight: wp(1)}}>
            <CustomInput
              inputType="default"
              placeholder="the-doe-family"
              width="92%"
            />
          </View>
          <Button
            title="Missio.app"
            titleStyle={{color: colors.iconColor, fontSize: hp(2.1)}}
            buttonStyle={styles.missioStyle}
            containerStyle={styles.missioContainer}
          />
        </View>
      </View>
      <Text style={styles.bottomtext}>{SiteManageData.site}</Text>
      <View style={styles.bottomview}>
        <CustomButton title="Save" onClicked={goBack} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: 30,
    marginLeft: wp(1),
    paddingVertical: hp(1),
  },
  inputStyle: {
    fontSize: hp(2),
    marginLeft: 15,
    color: colors.textgrey,
  },
  inputContainer: {
    marginTop: hp(2),
  },

  subcontainer: {
    borderRadius: wp(5),
    backgroundColor: colors.textColor,
    width: wp(90),
    // alignItems: 'center',
    marginHorizontal: wp(5),
    flex: 0.4,
  },
  missioStyle: {
    backgroundColor: colors.textColor,
    paddingVertical: hp(2.2),
    paddingHorizontal: hp(2),
  },
  missioContainer: {borderRadius: hp(34)},
  text: {
    fontSize: hp(2),
    marginTop: hp(2),
    color: colors.heading,
    marginLeft: wp(4),
    lineHeight: 24,
  },

  bottomtext: {fontSize: hp(2), marginLeft: wp(4), color: colors.heading},
  bottomview: {position: 'absolute', bottom: 0},
  bottomcontainer: {
    marginVertical: hp('1.8'),
  },
  siteview: {flexDirection: 'row', alignItems: 'flex-start', width: '95%'},
});
