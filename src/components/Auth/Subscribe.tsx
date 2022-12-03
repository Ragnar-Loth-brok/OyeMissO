import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {Input, Text, CheckBox, Icon, Button} from '@rneui/themed';
import constants from '../../assets/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default function Subscribe(props: {
  type: string;
  id: number;
  checkId: number;
}) {
  const [checked1, setChecked1] = React.useState(props.id === props.checkId);
  const [checked2, setChecked2] = React.useState(props.id === props.checkId);
  const [checked3, setChecked3] = React.useState(props.id === props.checkId);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Input
          placeholder=" Enter Email Address"
          placeholderTextColor={colors.placeholder}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />
        <Text style={styles.updatetext}>
          How often would you like to receive updates?
        </Text>
      </View>
      <View style={styles.year}>
        <Text style={styles.text}>Weekly</Text>
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
              color={colors.primary}
              size={wp('7%')}
            />
          }
          checked={!checked1}
          onPress={() => setChecked1(!checked1)}
        />
      </View>
      <View style={styles.year}>
        <Text style={styles.text}>Monthly</Text>
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
              color={colors.primary}
              size={wp('7%')}
            />
          }
          checked={checked2}
          onPress={() => setChecked2(!checked2)}
        />
      </View>
      <View style={styles.year}>
        <Text style={styles.text}>Quarterly</Text>
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
              color={colors.primary}
              size={wp('7%')}
            />
          }
          checked={checked3}
          onPress={() => setChecked3(!checked3)}
        />
      </View>
      <View style={styles.buttonview}>
        <Button
          radius={wp('30%')}
          size="lg"
          type="outline"
          title="Cancel"
          titleStyle={styles.loginTitle}
          buttonStyle={styles.loginButton}
          containerStyle={styles.buttonContainerStyle}
        />
        <Button
          radius={wp('30%')}
          title="Subscribe"
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subcontainer: {
    width: wp('95%'),
    justifyContent: 'center',
  },
  updatetext: {
    fontSize: wp('5%'),
    fontFamily: constants.fontBold,
    marginLeft: wp('5%'),
  },
  inputContainerStyle: {
    borderBottomWidth: wp('0%'),
    backgroundColor: colors.textColor,
    borderRadius: wp('30%'),
    paddingVertical: hp('0.8%'),
  },
  inputStyle: {
    fontSize: wp('4%'),
    marginLeft: wp('5%'),
    fontFamily: constants.fontMedium,
  },

  checkboxContainer: {
    backgroundColor: 'transparent',
    padding: wp('0%'),
    margin: wp('0%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('7%'),
  },
  buttonContainerStyle: {
    width: wp('40%'),
    marginVertical: hp('3%'),
    marginHorizontal: wp('2%'),
  },
  buttonStyle: {
    paddingVertical: wp('4%'),
  },
  buttonTitleStyle: {
    fontSize: wp('5%'),
    fontFamily: constants.fontMedium,
    textAlign: 'center',
  },
  loginTitle: {
    color: colors.textblack,
    fontSize: wp('4%'),
    letterSpacing: wp('0.2%'),
    fontFamily: constants.fontBold,
  },
  loginButton: {
    borderColor: colors.textblack,
    borderWidth: wp('0.4%'),
    backgroundColor: colors.appBackground,
    paddingVertical: wp('4%'),
  },

  buttonview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  year: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: wp('3%'),
  },
  text: {fontSize: 18},
});
