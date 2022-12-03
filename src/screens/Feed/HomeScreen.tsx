import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {
  Layout,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import Logo1 from '../../assets/icons/logo1.svg';
import FeedCard from '../../components/Feeds/FeedCard';

interface FeedChunk {
  time: number | null;
  likes: number | null;
  comments: number | null;
  key: string;
  name: string;
  avatar: string;
  imageUrl: string;
  title: string;
  text: string;
}
interface FeedState {
  app: {
    feeds: [FeedChunk];
  };
}

const SCALE_FACTOR = (hp(100) / constants.deviceDefaultHeight) * 1.1;

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const feedData = useSelector((state: FeedState) => state.app.feeds);

  const onPress = (data: {}) => {
    navigation.navigate('Post', {data});
  };

  const reactionsNavigate = () => {
    navigation.navigate('Reaction');
  };

  const commentNavigation = () => {
    navigation.navigate('Comment');
  };

  const renderFilterComponent = (chunk: any) => (
    <Animated.View
      layout={Layout.springify()}
      entering={SlideInDown.springify().stiffness(100).damping(16)}
      exiting={SlideOutDown.springify()}>
      <FeedCard
        reactionsNavigate={reactionsNavigate}
        commentNavigation={commentNavigation}
        onPress={() => onPress(chunk.item)}
        data={chunk.item}
        feedscreen={false}
      />
    </Animated.View>
  );

  // Feed screen UI
  // Card Component
  return (
    <>
      <StatusBar
        backgroundColor={colors.appBackground}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Animated.View
            entering={SlideInUp.springify().stiffness(100).damping(17)}>
            <Logo1 style={{transform: [{scale: SCALE_FACTOR}]}} />
          </Animated.View>
        </View>
        <Animated.FlatList
          layout={Layout.springify()}
          data={feedData}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={renderFilterComponent}
          contentContainerStyle={{paddingBottom: hp(15), paddingTop: hp(2)}}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: colors.textColor,
  },
  logo: {
    backgroundColor: colors.appBackground,
    paddingHorizontal: wp(4) * SCALE_FACTOR,
    paddingVertical: hp(2) * SCALE_FACTOR,
    elevation: 2,
    zIndex: 1,
    shadowColor: colors.shadowColor,
  },
});
