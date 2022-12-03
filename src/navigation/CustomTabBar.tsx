/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from '../assets/images/tabbar.svg';
import {Text} from '@rneui/themed';
import colors from '../assets/colors';

import SeachIcon from '../assets/icons/tabIcons/SearchIcon';
import BellIcon from '../assets/icons/tabIcons/BellIcon';
import SiteIcon from '../assets/icons/tabIcons/SiteIcon';
import AddIcon from '../assets/icons/tabIcons/AddIcon';
import HomeIcon from '../assets/icons/tabIcons/HomeIcon';

export default function CustomTabBar(props: {
  newPostNavigate: () => void;
  navigation: any;
  onPress: (screen: string) => void;
  active: string;
}) {
  return (
    <View style={styles.container}>
      <TabBar style={styles.tabbar} />
      <View style={styles.subContainer}>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback
            onPress={() => {
              props.onPress('Feeds');
              props.navigation.navigate('Home');
            }}>
            <View style={styles.tabIcon}>
              <HomeIcon
                scale={1.1}
                color={
                  props.active === 'Feeds' ? colors.primary : colors.placeholder
                }
              />
              <Text
                style={{
                  fontSize: wp('3.3%'),
                  marginTop: 5,
                  color:
                    props.active === 'Feeds'
                      ? colors.primary
                      : colors.placeholder,
                }}>
                Home
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              props.onPress('Search');
              props.navigation.navigate('Search');
            }}>
            <View style={styles.tabIcon}>
              <SeachIcon
                scale={1.1}
                color={
                  props.active === 'Search'
                    ? colors.primary
                    : colors.placeholder
                }
              />
              <Text
                style={{
                  fontSize: wp('3.3%'),
                  marginTop: 5,
                  color:
                    props.active === 'Search'
                      ? colors.primary
                      : colors.placeholder,
                }}>
                Search
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback
            onPress={() => {
              props.onPress('Notifications');
              props.navigation.navigate('Notifications');
            }}>
            <View style={styles.tabIcon}>
              <BellIcon
                scale={1.1}
                color={
                  props.active === 'Notifications'
                    ? colors.primary
                    : colors.placeholder
                }
              />
              <Text
                style={{
                  fontSize: wp('3.3%'),
                  marginTop: 5,
                  color:
                    props.active === 'Notification'
                      ? colors.primary
                      : colors.placeholder,
                }}>
                Notifications
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              props.onPress('Profile');
              props.navigation.navigate('Profile');
            }}>
            <View style={styles.tabIcon}>
              <SiteIcon
                scale={1.1}
                color={
                  props.active === 'Profile'
                    ? colors.primary
                    : colors.placeholder
                }
              />
              <Text
                style={{
                  fontSize: wp('3.3%'),
                  marginTop: 5,
                  color:
                    props.active === 'Profile'
                      ? colors.primary
                      : colors.placeholder,
                }}>
                My Site
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.addTab}>
        <AddIcon
          style={{transform: [{scale: 0.5}]}}
          onPress={() => {
            props.onPress('Add');
            props.newPostNavigate();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    elevation: 10,
    shadowColor: colors.shadowColor,
    margin: 0,
    padding: 0,
    position: 'absolute',
    bottom: -20,
    transform: [{scale: wp('100') / 375}],
  },
  subContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    width: wp('40%'),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: -hp('2%')}],
  },
  addTab: {
    // backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '120%',
    borderRadius: 50,
  },
});
