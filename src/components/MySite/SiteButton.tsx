import React from 'react';
import {Button} from '@rneui/themed';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import {StyleSheet} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function SiteButton({title, onPress}: Props) {
  return (
    <Button
      title={title}
      onPress={onPress}
      type="clear"
      radius={wp(10)}
      titleStyle={styles.text}
      containerStyle={styles.container}
      buttonStyle={styles.button}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: wp(0.2),
    borderColor: colors.placeholder,
    width: wp(28),
  },
  button: {paddingVertical: wp(1.7)},
  text: {color: colors.textblack, fontSize: wp(3.2)},
});
