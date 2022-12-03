import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Input} from '@rneui/themed';

import constants from '../../assets/constants';
import colors from '../../assets/colors';

import {useNavigation} from '@react-navigation/native';

import EmailPhoneComponent from '../../components/Auth/EmailPhoneComponent';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function Phone() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const emailVerfication = () => {
    navigation.navigate('Email');
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <EmailPhoneComponent type="phone" onPress={emailVerfication}>
        <Input
          placeholder="Phone number"
          placeholderTextColor={colors.placeholder}
          keyboardType={'numeric'}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.inputContainer}
        />
      </EmailPhoneComponent>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: 30,
  },
  inputStyle: {
    fontSize: 15,
    marginLeft: 15,
    fontFamily: constants.fontMedium,
  },
  inputContainer: {
    height: 65,
  },
});
