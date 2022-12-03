import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Paperclip from '../../assets/icons/paperclip.svg';
import Docu from '../../assets/icons/docu.svg';

type Props = {
  title: string;
  manage: boolean;
  onPress: () => void;
};

// const icons = {
//   siteManagement: {name: 'paperclip', type: 'feather'},
//   manageUpdates: {name: 'document-text-outline', type: 'ionicon'},
//   partners: {name: 'user', type: 'feather'},
// };

const CustomTitle: React.FunctionComponent<Props> = ({title, manage}) => {
  return (
    <View style={styles.customTitleContainer}>
       {manage ? <Paperclip /> : <Docu />}
      <Text style={styles.subtext}>{title}</Text>
    </View>
  );
};

export default function PageButton(props: Props) {
  return (
    <Button
      title={<CustomTitle {...props} />}
      type="clear"
      buttonStyle={styles.buttonStyle}
      icon={styles.icon}
      iconPosition="right"
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: wp(95),
    justifyContent: 'space-between',
    backgroundColor: colors.textColor,
    padding: wp(3),
    marginHorizontal: wp(2),
    borderRadius: wp(3),
    marginTop: wp(2),
  },

  customTitleContainer: {
    flexDirection: 'row',
  },
  iconstyle: {
    backgroundColor: colors.appBackground,
    borderRadius: wp(10),
    padding: wp(2),
  },
  subtext: {
    color: colors.heading,
    fontSize: hp(2),
    fontFamily: constants.fontMedium,
    paddingHorizontal: wp(3),
    marginTop: wp(2),
  },
  icon: {
    type: 'custom-icon',
    name: 'editicon',
    size: wp(5),
    color: colors.heading,
  },
  container: {width: wp(10)},
});
