import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, Button, Icon} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import constants from '../../assets/constants';
import colors from '../../assets/colors';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  SlideOutLeft,
} from 'react-native-reanimated';

type Props = {
  name: string;
  avatarUri: string;
  timeSpan: string;
  id: string;
  onReject: (id: string) => void;
};

export default function SubscriberRequest({
  avatarUri,
  name,
  timeSpan,
  id,
  onReject,
}: Props) {
  const [confirmed, setConfirmed] = useState(false);

  const onConfirm = () => {
    setConfirmed(true);
  };

  return (
    <Animated.View
      layout={Layout.delay(250).springify().damping(15)}
      exiting={SlideOutLeft}
      style={styles.container}>
      <View style={styles.subview}>
        <View style={styles.subContainer}>
          <Avatar
            size={hp(5)}
            rounded
            source={{
              uri: avatarUri,
            }}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        {confirmed ? (
          <Text
            style={[
              styles.timeSpan,
              {color: colors.iconColor, padding: wp(1)},
            ]}>
            See Profile
          </Text>
        ) : (
          <Text style={styles.timeSpan}>{timeSpan}</Text>
        )}
      </View>
      {confirmed ? (
        <Animated.View
          layout={Layout.delay(250)}
          entering={FadeIn.delay(250).duration(250)}
          style={[styles.buttonview]}>
          <Icon
            type="material"
            name="celebration"
            color={colors.username}
            size={hp(3.2)}
          />
          <Text
            style={{
              color: colors.username,
              fontSize: hp(1.8),
              marginLeft: wp(2),
            }}>
            Awesome! You added a new partner.
          </Text>
        </Animated.View>
      ) : (
        <Animated.View
          layout={Layout.springify()}
          exiting={FadeOut.duration(250)}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.buttonview, {justifyContent: 'space-between'}]}>
          <Button
            radius={wp('30%')}
            type="outline"
            title="Reject"
            onPress={() => onReject(id)}
            titleStyle={styles.rejectTitle}
            buttonStyle={styles.rejectButton}
            containerStyle={styles.buttonContainerStyle}
          />
          <Button
            onPress={onConfirm}
            radius={wp('30%')}
            title="Confirm"
            containerStyle={styles.buttonContainerStyle}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: wp(6),
    borderBottomWidth: wp(0.2),
    borderColor: colors.secondaryBorder,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    marginLeft: wp('3'),
    color: colors.username,
    fontFamily: constants.fontBold,
    fontSize: wp('3.7'),
  },
  timeSpan: {
    color: colors.textSecondary,
    fontSize: wp(3.5),
  },
  buttonContainerStyle: {
    width: '49%',
  },
  buttonStyle: {
    paddingVertical: wp(1.3),
    backgroundColor: colors.heading,
  },
  buttonTitleStyle: {
    fontSize: wp('3.9'),
    fontFamily: constants.fontMedium,
  },
  rejectTitle: {
    color: colors.textblack,
    fontSize: wp('3.9'),
    fontFamily: constants.fontMedium,
  },
  rejectButton: {
    borderColor: colors.heading,
    borderWidth: wp(0.3),
    paddingVertical: wp(1),
  },
  buttonview: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.5'),
  },
});
