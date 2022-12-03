import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import constants from '../../assets/constants';
import colors from '../../assets/colors';

export default function CustomButton(props: {
  title: string;
  onClicked: () => void;
}) {
  return (
    <View style={styles.container}>
      <Button
        radius={30}
        title={props.title}
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}
        onPress={props.onClicked}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    width: wp(100),
    alignItems: 'center',
  },
  buttonContainerStyle: {
    width: '90%',
    marginVertical: hp('2'),
    elevation: 10,
  },
  buttonStyle: {
    paddingVertical: hp('1.5%'),
    backgroundColor: colors.iconColor,
  },
  buttonTitleStyle: {
    fontSize: wp('4.5%'),
    fontFamily: constants.fontBold,
  },
});
