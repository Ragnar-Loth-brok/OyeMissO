import React, {useState, useEffect, useMemo} from 'react';
import {Icon, Input} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FieldError, FieldErrorsImpl, Merge} from 'react-hook-form';

type Props = {
  placeholder: string;
  inputType: 'default' | 'password';
  width: string | number | null;
  onChange: any;
  value: string;
  onBlur: any;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;

  keyboardType:
    | 'default'
    | 'numeric'
    | 'visible-password'
    | 'email-address'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search';
};

export default function CustomInput({
  placeholder = '',
  inputType = 'default',
  width,
  onChange,
  value,
  onBlur,
  keyboardType = 'default',
  error,
}: Props) {
  const [security, setSecurity] = useState(true);
  const passSecurity = () => setSecurity(val => !val);

  const inputStyles = useMemo(
    () => [
      {borderWidth: error ? 1 : 0, borderBottomWidth: error ? 1 : 0},
      styles.inputContainerStyle,
    ],
    [error],
  );

  return (
    <Input
      onChangeText={onChange}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      secureTextEntry={inputType === 'default' ? false : security}
      inputContainerStyle={[inputStyles, {width: width ? width : wp('85')}]}
      keyboardType={keyboardType}
      inputStyle={styles.inputStyle}
      errorMessage={error}
      // eslint-disable-next-line react-native/no-inline-styles
      errorStyle={{alignSelf: 'flex-start'}}
      containerStyle={[
        styles.containerStyle,
        {width: width ? width : wp('85')},
      ]}
      rightIcon={
        inputType === 'password' && (
          <Icon
            name={security ? 'eye' : 'eye-off'}
            type="feather"
            color={colors.iconDefaultColor}
            onPress={passSecurity}
            style={styles.iconStyle}
            size={hp(2.5)}
            // reverse
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: colors.textColor,
    borderRadius: wp('30%'),
    borderColor: colors.red,
  },
  inputStyle: {
    fontSize: hp('2'),
    paddingLeft: wp('5'),
    paddingVertical: hp(2),
    borderRadius: wp('30%'),
  },
  containerStyle: {
    marginVertical: 0,
    paddingHorizontal: 0,
    // height: hp(9),
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: hp(0.7),
  },
  iconStyle: {
    padding: hp(1),
    marginRight: wp(2),
  },
});
