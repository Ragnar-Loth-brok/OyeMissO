import {Button, Tab, TabView, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

import chunks from '../../assets/chunk';
import data from '../../assets/carddata';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

import FeedCard from '../Feeds/FeedCard';
import SearchCard from './SearchCard';

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
export default function SearchTab(props: {
  search: string;
  postNavigate: (chunk: {}) => void;
  reactionsNavigate: () => void;
}) {
  const [index, setIndex] = useState(0);

  const feedData = useSelector((state: FeedState) => state.app.feeds);

  const tabStyles = React.useMemo(
    () => ({
      tabOneContainer: [
        {
          backgroundColor:
            index === 0 ? colors.appBackground : colors.textColor,
        },
        styles.tabButtonStyle,
      ],
      tabOneTitle: [
        {
          color: index === 0 ? colors.primary : colors.iconDefaultColor,
        },
        styles.tabButtonTitle,
      ],
      tabTwoContainer: [
        {
          backgroundColor:
            index === 1 ? colors.appBackground : colors.textColor,
        },
        styles.tabButtonStyle,
      ],
      tabTwoTitle: [
        {
          color: index === 1 ? colors.primary : colors.iconDefaultColor,
        },
        styles.tabButtonTitle,
      ],
    }),
    [index],
  );

  return (
    <>
      <Tab value={index} onChange={setIndex} disableIndicator>
        <View style={styles.tabContainer}>
          <Button
            title="Profiles"
            type="clear"
            onPress={() => {
              setIndex(0);
            }}
            radius={wp(5)}
            titleStyle={tabStyles.tabOneTitle}
            containerStyle={tabStyles.tabOneContainer}
          />
          <Button
            title="Posts"
            type="clear"
            onPress={() => {
              setIndex(1);
            }}
            radius={wp(5)}
            titleStyle={tabStyles.tabTwoTitle}
            containerStyle={tabStyles.tabTwoContainer}
          />
        </View>
      </Tab>
      <TabView
        // disableSwipe
        value={index}
        onChange={setIndex}
        animationConfig={{useNativeDriver: true, duration: 320, bounciness: 3}}
        tabItemContainerStyle={{
          backgroundColor: colors.textColor,
        }}>
        <TabView.Item>
          <View>
            <Text style={styles.text}>Results for '{props.search}'</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.searchCardContainer}>
              {data
                .filter(chunk => chunk.title.includes(props.search))
                .map(chunk => (
                  <SearchCard
                    key={chunk.key}
                    title={chunk.title}
                    imageUrl={chunk.imageUrl}
                  />
                ))}
            </ScrollView>
          </View>
        </TabView.Item>
        <TabView.Item>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              {feedData.map(chunk => (
                <FeedCard
                  commentNavigation={() => {}}
                  reactionsNavigate={props.reactionsNavigate}
                  onPress={() => props.postNavigate(chunk)}
                  data={chunk}
                  key={chunk.key}
                  feedscreen={null}
                />
              ))}
            </View>
          </ScrollView>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: wp(8),
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: wp(2),
    alignSelf: 'center',
    backgroundColor: colors.textColor,
    marginBottom: hp(2),
  },
  buttnContainer: {
    width: '50%',
  },
  titleStyle: {
    fontSize: wp(3.3),
    fontFamily: constants.fontMedium,
  },
  searchCardContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: hp(5),
  },
  container: {
    marginTop: hp('2'),
    marginBottom: wp('18'),
    paddingHorizontal: wp(1),
  },
  text: {
    color: colors.heading,
    fontFamily: constants.fontBold,
    fontSize: wp('5'),
    paddingHorizontal: wp(2),
    paddingTop: wp(2),
  },
  tabButtonStyle: {
    width: '50%',
  },
  tabButtonTitle: {
    fontSize: wp(3.3),
    fontFamily: constants.fontMedium,
  },
});
