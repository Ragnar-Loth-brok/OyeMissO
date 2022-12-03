import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Tab, TabView, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import chunks from '../../assets/chunk';
import colors from '../../assets/colors';

import constants from '../../assets/constants';
import FeedCard from '../../components/Feeds/FeedCard';
import StripHeader from '../../components/Headers/StripHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {
  Layout,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

export default function MyPosts() {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const onPress = (data: {}) => {
    // navigation.navigate('Post', {data});
  };

  const reactionsNavigate = () => {
    // navigation.navigate('Reaction');
  };

  const commentNavigation = () => {
    // navigation.navigate('Comment');
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
  return (
    <SafeAreaView style={styles.container}>
      <StripHeader title="My Posts" />
      <View style={styles.subContainer}>
        <Tab
          value={index}
          onChange={setIndex}
          disableIndicator
          buttonStyle={styles.tabbutton}
          containerStyle={styles.tabcontainer}
          variant="primary">
          <Tab.Item>
            <View style={styles.main}>
              <Icon
                name="document"
                type="custom-icon"
                color={index === 0 ? colors.iconColor : colors.placeholder}
                size={wp(5)}
              />
              <Text
                style={[
                  styles.tabTitle,
                  {color: index === 0 ? colors.iconColor : colors.placeholder},
                ]}>
                All Posts
              </Text>
            </View>
          </Tab.Item>
          <Tab.Item>
            <View style={styles.subview}>
              <Icon
                name="eye-with-line"
                type="entypo"
                color={index === 1 ? colors.iconColor : colors.placeholder}
                size={wp(5)}
              />
              <Text
                style={[
                  styles.tabTitle,
                  {color: index === 1 ? colors.iconColor : colors.placeholder},
                ]}>
                Invisible Posts
              </Text>
            </View>
          </Tab.Item>
        </Tab>
        <TabView
          value={index}
          onChange={setIndex}
          animationConfig={{
            useNativeDriver: true,
            duration: 300,
            bounciness: 3,
          }}
          disableSwipe
          tabItemContainerStyle={styles.tabitemcontainer}>
          <TabView.Item>
            <FlatList
              data={chunks}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={false}
              renderItem={renderFilterComponent}
              contentContainerStyle={styles.content}
            />
          </TabView.Item>
          <TabView.Item>
            <FlatList
              data={chunks}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={false}
              renderItem={renderFilterComponent}
              contentContainerStyle={styles.contentcontainer}
            />
          </TabView.Item>
        </TabView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    width: wp(100),
    flex: 1,
  },
  heading: {
    color: colors.heading,
    fontSize: wp(5.5),
    fontFamily: constants.fontBold,
    paddingVertical: hp(1),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: wp(4.2),
  },
  subContainer: {
    width: '100%',
    flex: 1,
  },
  tabTitle: {
    marginLeft: wp(2),
    fontSize: wp(3.7),
  },
  main: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: colors.border,
    paddingVertical: hp(1),
  },
  tabbutton: {paddingVertical: hp(2), paddingHorizontal: 0},
  tabcontainer: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.appBackground,
  },
  tabitemcontainer: {
    backgroundColor: colors.textColor,
  },
  content: {
    paddingVertical: hp('2'),
  },
  contentcontainer: {
    paddingBottom: wp(25),
    paddingTop: wp('4'),
  },
  subview: {
    flexDirection: 'row',
    paddingVertical: hp(1),
  },
});
