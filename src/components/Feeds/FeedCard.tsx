import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Text, Card} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {FadeInUp, Layout} from 'react-native-reanimated';

import CardAvatar from './CardAvatar';
import CardBottom from './CardBottom';
import colors from '../../assets/colors';
import GivingLink from './GivingLink';
import constants from '../../assets/constants';
import Hashtag from './Hashtag';
import Comment from './Comment';
import LinearGradient from 'react-native-linear-gradient';

interface CardProps {
  time: number | null;
  likes: number | null;
  comments: number | null;
  key: string | null;
  name: string;
  avatar: string;
  imageUrl: string;
  title: string;
  text: string;
}

type Props = {
  data: CardProps;
  onPress: () => void;
  feedscreen: boolean | null;
  reactionsNavigate: () => void;
  commentNavigation: () => void;
};

export default function FeedCard({
  data,
  commentNavigation,
  feedscreen,
  onPress,
  reactionsNavigate,
}: Props) {
  const [expandText, setExpandText] = useState(true);

  const expand = () => {
    setExpandText(true);
  };

  useEffect(() => {
    if (!feedscreen) {
      setExpandText(false);
    }
  }, [feedscreen]);

  const feedStyles = useMemo(() => {
    return {
      cardStyles: [
        styles.container,
        {
          marginHorizontal:
            feedscreen || feedscreen === null ? wp('0') : wp('3.5'),
          elevation: 0.5,
        },
      ],
      imageStyle: {height: feedscreen ? hp('31') : hp('27')},
    };
  }, [feedscreen]);

  // Card UI
  // Card Avatar
  // Card bottom strip (likes, comments)
  return (
    <Card containerStyle={feedStyles.cardStyles}>
      {!feedscreen && (
        <CardAvatar
          username={data.name}
          avatar={data.avatar}
          time={data.time}
        />
      )}
      {data.imageUrl ? (
        <Card.Image
          style={feedStyles.imageStyle}
          // onLoad={}
          resizeMode="cover"
          source={{
            uri: data.imageUrl,
          }}
          transition={false}
        />
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#CACCCD', '#FFFFFF']}
          style={[feedStyles.imageStyle, styles.linearGradient]}>
          <Text style={[styles.title, styles.LinearGradientText]}>
            {data.title}
          </Text>
        </LinearGradient>
      )}
      <GivingLink />
      {!feedscreen && <CardBottom reactionsNavigate={reactionsNavigate} />}

      {feedscreen && <Text style={styles.timetext}>12h</Text>}
      <Pressable onPress={onPress}>
        <Animated.View
          layout={Layout.duration(250)}
          style={styles.subContainer}>
          {data.imageUrl && <Text style={styles.title}>{data.title}</Text>}
          <Animated.Text
            layout={Layout.springify()}
            entering={FadeInUp.springify()}
            style={styles.text}>
            {data.text.substring(0, 304)}...{' '}
            <Text style={{color: colors.primaryBlue}}>Read more</Text>
          </Animated.Text>
          {/* {expandText || data.text.length < 310 ? (
            <Animated.Text
              layout={Layout.springify()}
              entering={FadeInUp.springify()}
              style={styles.text}>
              {data.text}
            </Animated.Text>
          ) : (
            <Animated.Text
              layout={Layout.springify()}
              entering={FadeInUp.springify()}
              style={styles.text}>
              {data.text.substring(0, 304)}...{' '}
              <Text style={{color: colors.primaryBlue}} onPress={expand}>
                Read more
              </Text>
            </Animated.Text>
          )} */}
        </Animated.View>
      </Pressable>
      <Animated.View layout={Layout.duration(200)}>
        {feedscreen ? (
          <Hashtag />
        ) : (
          <Comment commentNavigation={commentNavigation} />
        )}
      </Animated.View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: hp('1.2'),
    paddingBottom: hp('3'),
    paddingTop: 0,
    paddingHorizontal: 0,
    backgroundColor: colors.appBackground,
    borderRadius: wp('3.5'),
    borderWidth: 0,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  subContainer: {
    paddingHorizontal: wp('3'),
  },
  title: {
    textAlign: 'left',
    fontSize: hp('2.5'),
    letterSpacing: 0.9,
    lineHeight: hp('3.6'),
    marginVertical: hp('1'),
    // fontWeight: '700',
    fontFamily: constants.fontBold,
    color: colors.heading,
  },
  text: {
    marginBottom: hp('1.5'),
    color: colors.feedText,
    fontSize: hp('1.9'),
    // fontFamily: constants.fontLight,
    lineHeight: hp(2.7),
  },
  timetext: {
    color: colors.grey,
    fontFamily: constants.fontLight,
    fontSize: hp('1.7'),
    marginHorizontal: wp('3'),
    marginVertical: hp(1.4),
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
  },
  LinearGradientText: {
    fontSize: hp(2.6),
    lineHeight: hp(4),
    paddingHorizontal: wp(2),
  },
});
