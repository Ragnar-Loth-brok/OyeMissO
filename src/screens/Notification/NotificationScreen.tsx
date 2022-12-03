import React, {useState} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Badge, Tab, TabView, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';

import SubscriberRequest from '../../components/Notification/SubscriberRequest';

import subscriberData from './subscriberchunk';
import notificationData from './notificationchunk';
import colors from '../../assets/colors';
import NotificationCard from '../../components/Notification/NotificationCard';
import constants from '../../assets/constants';
import {NotificationScreenData} from '../../assets/localization/default';

export default function NotificationScreen() {
  const [tab, setTab] = useState(0);
  const [subsData, setSubsData] = useState(subscriberData);

  const onReject = (id: string) => {
    const data = subsData.filter(item => item.id !== id);
    setSubsData(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: hp(2.8),
          paddingVertical: hp(1),
          marginHorizontal: wp(5),
          fontFamily: constants.fontBold,
          marginTop: hp(0.5),
        }}>
        {NotificationScreenData.header}
      </Text>
      <Tab
        value={tab}
        onChange={setTab}
        disableIndicator
        // containerStyle={styles.tabContainer}
        variant="primary">
        <View style={[styles.tabContainer]}>
          <Text
            style={[
              styles.titleStyle,
              {color: tab === 0 ? colors.primary : colors.grey},
            ]}
            onPress={() => {
              setTab(0);
            }}>
            {NotificationScreenData.heading}
          </Text>
          <Pressable
            style={styles.pressableStyle}
            onPress={() => {
              setTab(1);
            }}>
            <Text
              style={[
                styles.titleStyle,
                {color: tab === 1 ? colors.primary : colors.grey},
              ]}>
              {NotificationScreenData.requestText}
            </Text>
            <Badge
              value={20}
              containerStyle={styles.badgeContainer}
              badgeStyle={styles.badge}
              textStyle={styles.badgetext}
            />
          </Pressable>
        </View>
      </Tab>
      <TabView
        value={tab}
        onChange={setTab}
        // animationType="timing"
        tabItemContainerStyle={styles.tabviewcontainer}
        animationConfig={{useNativeDriver: true, duration: 320, bounciness: 3}}
        disableSwipe>
        <TabView.Item style={[styles.tabViewItem, {marginHorizontal: 0}]}>
          {/* <Animated.FlatList
            // layout={layout}
            data={notificationData}
            contentContainerStyle={styles.contentcontainer}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NotificationCard
                index={index}
                message={item.message}
                timeSpan={item.timeSpan}
                avatarUri={item.avatarUri}
                comments={item.comments}
                iconType={item.iconType}
                likes={item.likes}
              />
            )}
          /> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentcontainer}>
            {notificationData.map((item, index) => (
              <NotificationCard {...item} index={index} />
            ))}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          {/* <FlatList
            data={subscriberData}
            contentContainerStyle={styles.contentcontainer}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <SubscriberRequest
                name={item.name}
                timeSpan={item.timeSpan}
                avatarUri={item.avatarUri}
              />
            )}
          /> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentcontainer}>
            {subsData.map(item => (
              <SubscriberRequest {...item} key={item.id} onReject={onReject} />
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
    borderTopWidth: wp(0.3),
    borderBottomWidth: wp(0.325),
    borderTopColor: colors.border,
    borderBottomColor: colors.secondaryBorder,
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    width: '100%',
  },
  tabViewItem: {
    backgroundColor: colors.appBackground,
    marginHorizontal: wp(4),
  },
  badgeContainer: {
    // padding: hp(1),
    borderRadius: 0,
    transform: [{translateX: hp(-1.5)}],
  },
  titleStyle: {
    fontSize: hp(2),
    paddingHorizontal: wp(4.7),
    paddingVertical: hp(2.8),
  },
  pressableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabviewcontainer: {
    backgroundColor: colors.appBackground,
    width: wp(100),
  },
  badge: {
    borderRadius: wp(1),
    backgroundColor: colors.badge,
  },
  contentcontainer: {
    flexGrow: 1,
    paddingBottom: hp(15),
  },
  badgetext: {
    fontSize: hp(1.4),
  },
});
