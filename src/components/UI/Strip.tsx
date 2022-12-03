import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Divider, Text} from '@rneui/themed';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

type Props = {
  text: string | null;
  width: string | number | 'default';
};

export default function Strip({text, width = 'default'}: Props) {
  const containerStyle = useMemo(
    () => [styles.stripContainer, {width: width === 'default' ? '90%' : width}],
    [width],
  );

  return (
    <View style={containerStyle}>
      <Divider
        orientation="horizontal"
        color={colors.strip}
        width={1}
        style={styles.divider}
      />
      {text && <Text style={styles.text}>{text}</Text>}
      <Divider
        orientation="horizontal"
        color={colors.strip}
        width={1}
        style={styles.divider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flex: 1,
  },
  stripContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  text: {
    paddingHorizontal: hp(1.5),
    color: colors.textSecondary,
    fontSize: hp(1.9),
  },
});
