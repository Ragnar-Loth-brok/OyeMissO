import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type Props = {
  title: string;
  dashedBorder: boolean;
};

export default function SiteTabButton({title, dashedBorder}: Props) {
  return (
    <View style={styles.container}>
      <Button
        radius={wp(30)}
        type="clear"
        title={title}
        titleStyle={styles.buttonTitle}
        buttonStyle={[
          styles.buttonStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          {borderStyle: dashedBorder ? 'dashed' : 'solid'},
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1),
  },
  buttonTitle: {
    color: colors.primary,
    fontSize: wp('4.5%'),
    letterSpacing: wp('0.2%'),
    fontFamily: constants.fontBold,
    // textTransform: 'capitalize',
  },
  buttonStyle: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.appBackground,
  },
});
