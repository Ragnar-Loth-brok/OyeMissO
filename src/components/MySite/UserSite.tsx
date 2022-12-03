import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomSheet, Button, Text} from '@rneui/themed';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import SiteButton from './SiteButton';
import GivingLinkComponent from '../Overlay/GivingLinkModal';

type Props = {
  navigateProfile: () => void;
  navigateEdit: () => void;
};

export default function UserSite({navigateProfile, navigateEdit}: Props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(val => !val);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>The Doe Family</Text>
          <Text style={styles.text}>
            Church Planting in Houston and building Missio
          </Text>
          <Text style={styles.email}>thedoefamily@email.com</Text>
          <View style={styles.subview}>
            <View style={[styles.countContainer, styles.borderStyle]}>
              <Text style={styles.postsCount}>15</Text>
              <Text style={styles.countType}>Posts</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.postsCount}>256</Text>
              <Text style={styles.countType}>Partners</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomview}>
          <Button
            onPress={toggleModal}
            type="clear"
            title="My Giving Link "
            titleStyle={styles.giving}
            radius={wp(30)}
            containerStyle={styles.buttonContainer}
            icon={{
              name: 'gving-icon',
              type: 'custom-icon',
              size: wp(6),
              color: colors.primaryDefault,
            }}
            buttonStyle={styles.buttonicon}
            iconRight
          />
          <View style={styles.subButtonContainer}>
            <SiteButton title="Site Analytics" onPress={navigateProfile} />
            <SiteButton title="Edit Site Info" onPress={navigateEdit} />
            <SiteButton title="My Profile" onPress={navigateProfile} />
          </View>
        </View>
      </View>
      <BottomSheet
        isVisible={modal}
        onBackdropPress={toggleModal}
        backdropStyle={{backgroundColor: colors.modalBackgroundColor}}>
        <GivingLinkComponent onCancel={() => setModal(false)} />
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: colors.appBackground,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
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
  title: {
    color: colors.heading,
    fontSize: wp(5.4),
    fontFamily: constants.fontBold,
    textAlign: 'center',
    lineHeight: wp(8),
  },
  text: {
    color: colors.title,
    fontSize: wp(3.3),
    textAlign: 'center',
    lineHeight: wp(6.5),
    letterSpacing: 0.6,
    // fontFamily: constants.fontLight,
    marginTop: wp(1),
    marginBottom: wp(2),
  },
  email: {
    color: colors.iconColor,
    backgroundColor: colors.border,
    fontSize: wp(3.7),
    paddingVertical: wp(1),
    paddingHorizontal: wp(3),
    borderRadius: wp(5),
    textAlign: 'center',
  },
  countContainer: {
    alignItems: 'center',
    paddingHorizontal: wp(13),
  },
  postsCount: {fontFamily: constants.fontBold, fontSize: wp(5.7)},
  countType: {
    color: colors.textSecondary,
    fontSize: wp(4),
    fontFamily: constants.fontMedium,
    letterSpacing: 0.7,
  },
  buttonContainer: {
    borderWidth: 0.8,
    borderColor: colors.primaryDefault,
    width: wp(90),
  },
  subButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: wp(4.2),
  },
  subview: {
    flexDirection: 'row',
    marginTop: wp(4),
    marginBottom: wp(1.5),
  },
  bottomview: {
    marginHorizontal: wp(3),
  },
  giving: {
    color: colors.primaryDefault,
    fontSize: wp(5),
  },
  buttonicon: {
    paddingVertical: wp(1.5),
  },
  borderStyle: {
    borderRightWidth: wp(0.3),
    borderColor: colors.border,
  },
});
