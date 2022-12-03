import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, Icon, Input} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import constants from '../../assets/constants';
import colors from '../../assets/colors';
import Animated, {
  FadeInUp,
  FadeOutUp,
  Layout,
  SlideInLeft,
  SlideInUp,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import Heart from '../../assets/icons/heart.svg';
import Commentstroke from '../../assets/icons/commentstroke.svg';
import Messanger from '../../assets/icons/messanger.svg';

type Props = {
  message: string;
  avatarUri: string | null;
  iconType: string | null;
  timeSpan: string;
  likes: number | null;
  comments: number | null;
  index: number;
};

export default function NotificationCard({
  message,
  avatarUri,
  iconType,
  timeSpan,
  likes,
  comments,
  index,
}: Props) {
  const [reply, setReply] = useState(false);

  const onReply = () => {
    setReply(val => !val);
  };

  return (
    <Animated.View
      layout={Layout.springify().damping(13)}
      entering={SlideInLeft.delay(index * 150)}
      style={[styles.container]}>
      <View
        style={[
          styles.subContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            alignItems: comments && likes ? 'flex-start' : 'center',
          },
        ]}>
        {avatarUri && (
          <Avatar
            size={hp(5.5)}
            rounded
            source={{
              uri: avatarUri,
            }}
          />
        )}
        {iconType && (
          <Icon
            type="material"
            name={
              iconType === 'account' ? 'account-circle' : 'notifications-none'
            }
            color={colors.checkboxCheckedBg}
            size={wp(5)}
            reverse
            reverseColor={colors.primaryDefault}
            containerStyle={{margin: 0}}
          />
        )}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.textContainer}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.timeSpan}>{timeSpan}</Text>
          </View>
          {comments && likes && (
            <View style={styles.bottomContainer}>
              <View style={{flexDirection: 'row', marginTop: hp(1)}}>
                <View style={styles.iconContainer}>
                 
                  <Heart />
                  <Text style={styles.text}>780</Text>
                </View>
                <View style={styles.iconContainer}>
                  
                  <Commentstroke />
                  <Text style={styles.text}>250</Text>
                </View>
              </View>
              <Text style={styles.reply} onPress={onReply}>
                {reply ? 'Close' : 'Reply'}
              </Text>
            </View>
          )}
        </View>
      </View>
      {reply && (
        <Animated.View
          layout={Layout.duration(250)}
          entering={FadeInUp}
          exiting={FadeOutUp}
          // style={animatedHeight}
        >
          <Input
            placeholder="Type your comment..."
            placeholderTextColor={colors.iconDefaultColor}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.containerStyle}
            rightIconContainerStyle={{marginVertical: 0, paddingVertical: 0}}
            rightIcon={<Messanger />}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    width: wp(100),
    paddingHorizontal: wp(4),
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(1),
  },
  message: {
    color: colors.username,
    fontFamily: constants.fontMedium,
    fontSize: hp('1.8'),
    marginHorizontal: wp(3),
    lineHeight: hp(2.5),
    flex: 1,
  },
  timeSpan: {
    color: colors.textSecondary,
    fontSize: hp(1.6),
  },
  text: {
    color: colors.textSecondary,
    fontFamily: constants.fontLight,
    fontSize: hp('1.6'),
    paddingHorizontal: wp(1.5),
  },
  reply: {
    fontSize: hp('1.7'),
    color: colors.iconColor,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: wp(10),
    paddingVertical: hp(0.5),
  },
  containerStyle: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(10),
    overflow: 'hidden',
    marginBottom: hp(1.5),
  },
  inputStyle: {
    fontSize: hp(1.75),
    fontWeight: '400',
    paddingHorizontal: wp(3),
    marginVertical: 0,
    paddingVertical: 0,
  },
});
