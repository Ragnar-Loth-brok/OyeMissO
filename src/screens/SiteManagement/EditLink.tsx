import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../android/app/src/main/assets/custom/colors';
import {Input} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/Overlay/CustomButton';
import {SiteManageData} from '../../assets/localization/default';
import StripHeader from '../../components/Headers/StripHeader';
import {useNavigation} from '@react-navigation/native';

import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function EditLink() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DefaultHeader goBack={goBack} text={null} title="" />
        <StripHeader title="Edit Link" />
        <Text style={styles.text}>{SiteManageData.Page}</Text>
      </View>
      <Input
        placeholder="Watch Our Documentary"
        placeholderTextColor={colors.appBlack}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="https://www.myexternallink.com"
        placeholderTextColor={colors.appBlack}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />
      <View style={styles.bottom}>
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
    paddingVertical: hp(0.1),
  },
  text: {
    fontSize: hp(2),
    marginLeft: wp(4.5),
    color: colors.heading,
    marginVertical: hp(2.5),
  },
  bottom: {position: 'absolute', bottom: 0},
});
