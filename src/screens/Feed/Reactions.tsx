import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Tab, TabView, Text} from '@rneui/themed';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import colors from '../../assets/colors';

import ReactionsAvatar from '../../components/Feeds/ReactionsAvatar';
import ReactionsHeader from '../../components/Headers/ReactionsHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import HandPray from '../../assets/icons/handpray.svg';
import Handraise from '../../assets/icons/handraise.svg';
import Heart from '../../assets/icons/heart.svg';

interface ReactionsChunk {
  key: string;
  name: string;
  avatar: string;
  text: string;
}

interface ReactionsState {
  app: {
    reactions: [ReactionsChunk];
  };
}

export default function Reactions() {
  const [tab, setTab] = React.useState(0);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const reactionsData = useSelector(
    (state: ReactionsState) => state.app.reactions,
  );

  // const renderFilterComponent = (chunk: {
  //   item: ReactionsChunk;
  //   index: number;
  // }) => (
  //   console.log(chunk),
  //   (
  //     <Animated.View
  //       layout={Layout.springify()}
  //       entering={SlideInDown.delay(index * 200)}>
  //       <ReactionsAvatar
  //         key={chunk.item.key}
  //         name={chunk.item.name}
  //         text={chunk.item.text}
  //         url={chunk.item.avatar}
  //       />
  //     </Animated.View>
  //   )
  // );

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ReactionsHeader goBack={goBack} title="All Reactions" />
      <Tab
        value={tab}
        onChange={setTab}
        indicatorStyle={styles.indicatorStyle}
        containerStyle={styles.tabContainer}
        variant="primary">
        <Tab.Item buttonStyle={styles.itemButton}>
          <Text
            style={{
              color: tab === 0 ? colors.primary : colors.hand,
              fontSize: hp(2),
            }}>
            All 820
          </Text>
        </Tab.Item>
        <Tab.Item buttonStyle={styles.itemButton}>
          <HandPray />
          <Text
            style={[
              {color: tab === 1 ? colors.primary : colors.hand},
              {paddingLeft: wp(2)},
            ]}>
            15
          </Text>
        </Tab.Item>
        <Tab.Item buttonStyle={styles.itemButton}>
          <Heart />
          <Text
            style={[
              {color: tab === 2 ? colors.primary : colors.hand},
              {paddingLeft: wp(2)},
            ]}>
            780
          </Text>
        </Tab.Item>
        <Tab.Item buttonStyle={styles.itemButton}>
          <Handraise />
          <Text
            style={[
              {color: tab === 3 ? colors.primary : colors.hand},
              {paddingLeft: wp(2)},
            ]}>
            25
          </Text>
        </Tab.Item>
      </Tab>
      <TabView
        value={tab}
        onChange={setTab}
        // animationType="timing"
        tabItemContainerStyle={styles.tabviewcontainer}
        animationConfig={{useNativeDriver: true, duration: 150, bounciness: 1}}
        disableSwipe>
        <TabView.Item style={styles.tabViewItem}>
          {/* <Animated.FlatList
            layout={Layout.springify()}
            data={reactionsData}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={renderFilterComponent}
            contentContainerStyle={{
              paddingTop: hp(1),
            }}
          /> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {reactionsData.map(item => (
              <ReactionsAvatar
                key={item.key}
                name={item.name}
                text={item.text}
                url={item.avatar}
              />
            ))}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {reactionsData.map(chunk => (
              <ReactionsAvatar
                key={chunk.key}
                name={chunk.name}
                text={chunk.text}
                url={chunk.avatar}
              />
            ))}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {reactionsData.map(chunk => (
              <ReactionsAvatar
                key={chunk.key}
                name={chunk.name}
                text={chunk.text}
                url={chunk.avatar}
              />
            ))}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {reactionsData.map(chunk => (
              <ReactionsAvatar
                key={chunk.key}
                name={chunk.name}
                text={chunk.text}
                url={chunk.avatar}
              />
            ))}
          </ScrollView>
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    width: wp('100'),
    flex: 1,
  },
  tabContainer: {
    backgroundColor: colors.appBackground,
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.strip,
  },
  indicatorStyle: {
    backgroundColor: colors.primary,
    width: '21%',
    height: 2,
    marginHorizontal: wp('2'),
  },
  itemButton: {
    flexDirection: 'row',
    paddingVertical: hp('2'),
    backgroundColor: colors.appBackground,
    height: hp(7),
  },
  tabViewItem: {
    backgroundColor: colors.appBackground,
    width: '100%',
  },
  contentContainer: {
    paddingTop: hp(1),
    flexGrow: 1,
  },
  tabviewcontainer: {
    backgroundColor: colors.appBackground,
    width: wp(100),
  },
});
