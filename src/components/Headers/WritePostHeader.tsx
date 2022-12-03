import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from '@rneui/themed';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function WritePostHeader(props: {
  title: string;
  goBack: () => void;
  icon: boolean;
}) {
  return (
    <View style={styles.container}>
      <Icon
        onPress={props.goBack}
        size={wp(6)}
        name="keyboard-backspace"
        type="material-community"
        color={colors.appBlack}
        iconStyle={styles.icon}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        {props.icon ? (
          <Icon
            size={wp(3.5)}
            name="options-vertical"
            type="simple-line-icon"
            color={colors.textColor}
            reverseColor={colors.textPrimary}
            reverse
          />
        ) : (
          <Text style={styles.text}>Save</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: wp('3'),
    paddingHorizontal: wp('1'),
    backgroundColor: colors.appBackground,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    fontSize: wp(4.5),
  },
  text: {
    marginRight: wp(3),
    fontFamily: constants.fontMedium,
  },
  icon: {
    padding: wp('2'),
    borderRadius: wp('6'),
  },
});
