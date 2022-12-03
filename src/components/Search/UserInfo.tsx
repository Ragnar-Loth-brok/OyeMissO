import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>The Doe Family</Text>
        <Text style={styles.text}>
          Church Planting in Houston and building Missio
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Give"
          type="clear"
          titleStyle={styles.buttontext}
          containerStyle={styles.containerstyle}
          buttonStyle={styles.buttonstyle}
          radius={wp(10)}
          icon={{
            name: 'hand-heart-outline',
            type: 'material-community',
            size: wp(6),
            color: colors.primaryDefault,
          }}
          iconRight
        />
        <Button
          title="Subscribe"
          type="clear"
          titleStyle={styles.titlestyle}
          containerStyle={styles.sub}
          buttonStyle={styles.buttonstyle}
          radius={wp(10)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: wp(5),
    borderTopStartRadius: wp(8),
    borderTopEndRadius: wp(8),
    borderBottomColor: colors.border,
    borderBottomWidth: 0.8,
  },
  subContainer: {
    paddingVertical: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: wp(1),
  },
  title: {
    color: colors.heading,
    fontSize: wp(5.4),
    fontFamily: constants.fontBold,
    textAlign: 'center',
    lineHeight: wp(8),
  },
  text: {
    color: colors.title,
    fontSize: wp(3.8),
    textAlign: 'center',
    lineHeight: wp(6),
    letterSpacing: 0.6,
    width: wp(70),
    // fontFamily: constants.fontLight,
    marginTop: wp(1),
    marginBottom: wp(2),
  },
  buttontext: {color: colors.primaryDefault, fontSize: wp(5)},
  containerstyle: {
    borderWidth: wp(0.3),
    borderColor: colors.primaryDefault,
    width: wp(45),
  },
  buttonstyle: {paddingVertical: wp(2)},
  titlestyle: {color: colors.iconColor, fontSize: wp(5)},
  sub: {
    borderWidth: wp(0.3),
    borderColor: colors.iconColor,
    width: wp(45),
  },
});
