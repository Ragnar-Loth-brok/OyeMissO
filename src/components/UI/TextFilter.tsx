import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

import colors from '../../assets/colors';

export default function TextFilter() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon
          size={15}
          containerStyle={styles.iconStyle}
          name="b"
          color={colors.textblack}
          type="custom-icon"
        />
        <Icon
          size={15}
          containerStyle={styles.iconStyle}
          name="i"
          color={colors.textblack}
          type="custom-icon"
        />
        <Icon
          size={16}
          containerStyle={styles.iconStyle}
          name="underline"
          color={colors.textblack}
          type="fontisto"
        />
        <Icon
          size={15}
          containerStyle={styles.iconStyle}
          name="s"
          color={colors.textblack}
          type="custom-icon"
        />
      </View>
      <View style={styles.subContainer}>
        <Icon
          size={15}
          containerStyle={styles.iconStyle}
          name="list"
          color={colors.textblack}
          type="custom-icon"
        />
        <Icon
          size={15}
          containerStyle={styles.iconStyle}
          name="list123"
          color={colors.textblack}
          type="custom-icon"
        />
      </View>
      <Icon
        size={15}
        containerStyle={styles.iconStyle}
        name="text-edit"
        color={colors.textblack}
        type="custom-icon"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  subContainer: {flexDirection: 'row'},
  iconStyle: {paddingHorizontal: 5},
});
