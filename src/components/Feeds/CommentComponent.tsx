import {Avatar, Icon, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import Heart from '../../assets/icons/heart.svg';
import Commentgrey from '../../assets/icons/commentgrey.svg';
import Reply from '../../assets/icons/reply.svg';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

type CardProps = {
  name: string;
  avatar: string;
  likes: number;
  comments: number;
  time: number;
  text: string;
};
export default function CommentComponent(props: {data: CardProps}) {
  const [isShowReply, setIsShowReply] = useState(false);
  const {name, avatar, likes, comments, time, text} = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.subview}>
          <Avatar
            size={45}
            rounded
            source={{
              uri: avatar
                ? avatar
                : 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            }}
          />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}>{time}h ago</Text>
          </View>
        </View>
        <Icon
          size={25}
          name="more-horizontal"
          type="feather"
          color={colors.iconDefaultColor}
        />
      </View>
      {isShowReply && <View style={styles.strip} />}
      <View style={styles.centerview}>
        <Text style={styles.centertext}>{text}</Text>
      </View>
      <View style={styles.likeview}>
        <View style={styles.heartview}>
          {/* <Icon
            size={30}
            name="heart"
            color={colors.iconDefaultColor}
            type="custom-icon"
          /> */}
          <Icon
            size={20}
            name="heart-o"
            color={colors.iconDefaultColor}
            type="font-awesome"
          />
          <Text style={styles.likes}>{likes} Liked</Text>
        </View>
        <Pressable
          style={styles.comment}
          onPress={() => setIsShowReply(!isShowReply)}>
          {/* <Icon
            size={20}
            name="comment(stroke)"
            color={colors.iconDefaultColor}
            type="custom-icon"
          /> */}
          <Commentgrey />
          <Text style={styles.commenttext}>{comments} Replies</Text>
        </Pressable>
        <View style={styles.replyview}>
          {/* <Icon
            size={20}
            name="reply"
            color={colors.iconDefaultColor}
            type="custom-icon"
          /> */}
          <Reply />
          <Text style={styles.replytext}>Reply</Text>
        </View>
      </View>
      {isShowReply && (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{width: '92%', alignSelf: 'flex-end'}}>
          {/* <Reply
            data={{
              time: 23,
              likes: 0,
              comments: 0,
              name: 'Tom Kruis',
              avatar:
                'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
              text: 'Bullish run is by the corner ,market is at an overbought level now',
            }}
          /> */}
          <Text style={styles.seeMore}>See more (39)</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    marginLeft: 10,
    color: colors.appBlack,
    fontFamily: constants.fontBold,
    letterSpacing: 0.8,
    fontSize: 16,
  },
  time: {
    color: colors.iconDefaultColor,
    fontFamily: constants.fontMedium,
    fontSize: 14,
    marginLeft: 10,
  },
  subview: {flexDirection: 'row', alignItems: 'center'},
  strip: {
    width: 2,
    backgroundColor: colors.strip,
    height: '40%',
    position: 'absolute',
    left: 38,
    top: 55,
  },
  centerview: {
    marginLeft: '15%',
    marginVertical: '3%',
  },
  centertext: {
    fontSize: 15,
    lineHeight: 20,
  },
  likeview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '13%',
  },
  heartview: {flexDirection: 'row', alignItems: 'center'},
  likes: {
    fontSize: 15,
    color: colors.iconDefaultColor,
    fontFamily: constants.fontMedium,
    paddingHorizontal:wp(1)
  },
  comment: {flexDirection: 'row', alignItems: 'center', padding: 5},
  commenttext: {
    fontSize: 15,
    color: colors.iconDefaultColor,
    fontFamily: constants.fontMedium,
    paddingHorizontal: '2%',
  },
  replyview: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 8,
  },
  replytext: {
    fontSize: 15,
    color: colors.iconDefaultColor,
    fontFamily: constants.fontMedium,
    paddingHorizontal: '2%',
  },
  bottom: {width: '92%', alignSelf: 'flex-end'},
  seetext: {
    fontSize: 16,
    color: colors.appBlack,
    fontFamily: constants.fontMedium,
    marginTop: 10,
    marginLeft: '5%',
  },
  seeMore: {
    fontSize: 16,
    color: colors.appBlack,
    fontFamily: constants.fontMedium,
    marginTop: 10,
    marginLeft: '5%',
  },
});
