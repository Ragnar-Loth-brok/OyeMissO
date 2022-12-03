import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

type TitleProps = {
  title: string;
  IconSvg: JSX.Element | null;
  iconName: string | null;
};

type Props = {
  title: string;
  IconSvg: JSX.Element | null;
  iconName: string | null;
  onPress: () => void;
};

// const icons = {
//   profileSettings: {name: 'settings', type: 'feather'},
//   siteManagement: {name: 'newspaper-o', type: 'font-awesome'},
//   manageUpdates: {name: 'update', type: 'material'},
//   partners: {name: 'user', type: 'feather'},
//   postReminders: {name: 'clock', type: 'feather'},
//   BillingScreen: {name: 'receipt-outline', type: 'ionicon'},
//   inviteFriend: {name: 'adduser', type: 'antdesign'},
// };

const CustomTitle: React.FunctionComponent<TitleProps> = ({
  title,
  iconName,
  IconSvg,
}) => {
  return (
    <View style={styles.customTitleContainer}>
      {IconSvg && IconSvg}
      {iconName && (
        <Icon
          size={hp(2.9)}
          name={iconName}
          type="custom-icon"
          color={colors.heading}
          containerStyle={{width: hp(4)}}
        />
      )}
      <Text
        style={{
          color: colors.heading,
          fontSize: hp(2),
          fontFamily: constants.fontMedium,
          paddingHorizontal: wp(2),
        }}>
        {title}
      </Text>
    </View>
  );
};

export default function ProfileButton({
  title,
  IconSvg,
  iconName,
  onPress,
}: Props) {
  return (
    <Button
      title={
        <CustomTitle title={title} iconName={iconName} IconSvg={IconSvg} />
      }
      onPress={onPress}
      type="clear"
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.buttonContainerStyle}
      icon={{
        type: 'custom-icon',
        name: 'arrow_forward_ios_24px',
        size: hp(2),
        color: colors.heading,
      }}
      iconPosition="right"
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: wp(90),
    justifyContent: 'space-between',
  },
  buttonContainerStyle: {
    marginVertical: hp(1),
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
