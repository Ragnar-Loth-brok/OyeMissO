import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import EmailPhoneVerification from '../../components/Auth/EmailPhoneVerification';
import {Input} from '@rneui/themed';
import constants from '../../assets/constants';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function PhoneVerification() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const allSet = () => {
    navigation.navigate('AccountVerified');
  };
  return (
    <SafeAreaView style={styles.container}>
      <EmailPhoneVerification type="phone" onPress={allSet}>
        <Input
          placeholder="Enter code ex. 123456"
          placeholderTextColor={colors.placeholder}
          keyboardType={'numeric'}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.inputContainer}
        />
      </EmailPhoneVerification>
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
