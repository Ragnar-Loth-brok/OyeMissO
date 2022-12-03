import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RouteProp, useNavigation} from '@react-navigation/native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useRoute} from '@react-navigation/native';

import FeedCard from '../../components/Feeds/FeedCard';
import BottomFeedComponent from '../../components/Feeds/BottomFeedComponent';
import PostHeader from '../../components/Headers/PostHeader';

import colors from '../../assets/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';

type ParamList = {
  Post: {
    data: {
      index: number;
      time: number | null;
      likes: number | null;
      comments: number | null;
      key: number | null;
      name: string;
      avatar: string;
      imageUrl: string;
      title: string;
      text: string;
    };
  };
};

export default function PostScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  // const route = useRoute();
  const route = useRoute<RouteProp<ParamList, 'Post'>>();

  const [chunk, setChunk] = useState<{
    time: number | null;
    likes: number | null;
    comments: number | null;
    key: number | null;
    name: string;
    avatar: string;
    imageUrl: string;
    title: string;
    text: string;
    index: number;
  }>({
    time: null,
    likes: 0,
    comments: 0,
    key: 0,
    name: '',
    avatar: '',
    imageUrl: '',
    title: '',
    text: '',
    index: 0,
  });

  const navigateBack = () => {
    navigation.goBack();
  };

  const commentNavigation = () => {
    navigation.navigate('Comment');
  };

  useEffect(() => {
    if (route.params) {
      setChunk(route.params.data);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <PostHeader navigateBack={navigateBack} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: heightPercentageToDP(15)}}>
        <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
          <FeedCard
            onPress={() => {}}
            data={chunk}
            key={chunk.key}
            feedscreen
            reactionsNavigate={() => {}}
            commentNavigation={commentNavigation}
          />
        </Animated.View>
      </ScrollView>
      <BottomFeedComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
  },
});
