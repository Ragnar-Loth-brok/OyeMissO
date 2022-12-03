import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CheckBox, Icon, Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

export default function VerificationOptions(props: {
  type: string;
  id: number;
  selectOption: (id: number) => void;
  checkId: number;
}) {
  const [checked, setChecked] = React.useState(props.id === props.checkId);

  React.useEffect(() => {
    setChecked(props.id === props.checkId);
  }, [props.checkId, props.id]);

  return (
    <TouchableOpacity
      onPress={() => {
        props.selectOption(props.id);
      }}
      style={[
        styles.main,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: checked
            ? colors.checkboxCheckedBg
            : colors.checkboxBg,
          borderWidth: checked ? 1 : 0,
        },
      ]}>
      <View style={styles.container}>
        <Icon
          name={props.type === 'email' ? 'email-fast' : 'mobile'}
          type={
            props.type === 'email' ? 'material-community' : 'font-awesome-5'
          }
          size={wp('6%')}
          color={checked ? colors.appBackground : colors.appBlack}
          containerStyle={[
            styles.iconStyle,
            {
              borderColor: checked ? colors.primary : colors.strip,
              backgroundColor: checked ? colors.primary : colors.strip,
            },
          ]}
        />
        <View style={styles.subContainer}>
          <Text
            style={[styles.emailText, {fontWeight: checked ? '700' : '600'}]}>
            {props.type === 'mobile' && 'Phone Number'}
            {props.type === 'email' && 'Email'}
          </Text>
          <Text style={styles.with}>
            with your {props.type === 'mobile' && 'phone number'}
            {props.type === 'email' && 'email'}
          </Text>
        </View>
      </View>
      <CheckBox
        containerStyle={styles.checkboxContainer}
        checkedIcon={
          <Icon
            name="checkmark-circle-sharp"
            type="ionicon"
            color={colors.primary}
            size={wp('7%')}
          />
        }
        uncheckedIcon={
          <Icon
            name="ios-radio-button-off"
            type="ionicon"
            color={colors.strip}
            size={wp('7%')}
          />
        }
        checked={checked}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    width: wp('90%'),
    padding: wp('4%'),
    borderRadius: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderColor: colors.primary,
    marginVertical: hp('1.2%'),
  },
  container: {flexDirection: 'row'},
  iconStyle: {
    width: wp('13%'),
    height: wp('13%'),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('50%'),
  },
  subContainer: {justifyContent: 'center', marginHorizontal: wp('3%')},
  emailText: {
    color: colors.appBlack,
    fontSize: wp('4%'),
  },
  with: {
    color: colors.textSecondary,
    fontSize: wp('3.2%'),
    marginTop: 4,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('7%'),
  },
});
