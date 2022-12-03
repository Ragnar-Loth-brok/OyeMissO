import {Avatar, Button, Card, Icon, Tab, TabView, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import User from '../../assets/images/user.svg';
import {UserProfileScreenData} from '../../assets/localization/default';
export default function UserProfile() {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card.Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
          }}
        />
        <View style={styles.user}>
          <User />
          <Text style={styles.text}>{UserProfileScreenData.heading}</Text>
          <Text style={styles.title}>{UserProfileScreenData.message}</Text>
          <Text style={styles.page}>{UserProfileScreenData.givingText} </Text>
          <View style={styles.buttonview}>
            <Button
              radius={wp('30%')}
              title="Subscribe"
              containerStyle={styles.buttonContainerStyle}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitleStyle}
            />
            <TouchableOpacity style={styles.profile}>
              <Avatar
                size={45}
                rounded
                source={{
                  uri: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                }}
              />
              <Text style={styles.profiletext}>
                {UserProfileScreenData.profile}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomview}>
            <Tab
              value={index}
              onChange={setIndex}
              indicatorStyle={styles.indicatorStyle}
              containerStyle={styles.tabContainer}
              variant="primary">
              <Tab.Item buttonStyle={styles.itemButton}>
                <Icon
                  size={wp('5%')}
                  name="post"
                  color={index === 0 ? colors.primary : colors.hand}
                  type="custom-icon"
                />
              </Tab.Item>
              <Tab.Item buttonStyle={styles.itemButton}>
                <Icon
                  size={wp('9%')}
                  name="likes"
                  color={index === 1 ? colors.primary : colors.hand}
                  type="custom-icon"
                />
              </Tab.Item>
              <Tab.Item buttonStyle={styles.itemButton}>
                <Icon
                  size={wp('5%')}
                  name="about"
                  color={index === 2 ? colors.primary : colors.hand}
                  type="custom-icon"
                />
              </Tab.Item>
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
              <TabView.Item style={styles.tabViewItem}>
                <Text h1>Recent</Text>
              </TabView.Item>
              <TabView.Item style={styles.tabViewItem}>
                <Text h1>Favorite</Text>
              </TabView.Item>
              <TabView.Item style={styles.tabViewItem}>
                <Text h1>Cart</Text>
              </TabView.Item>
            </TabView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: colors.appBackground,
  },
  imageStyle: {
    height: 200,
  },
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '5%',
  },
  text: {
    fontSize: 16,
    fontFamily: constants.fontBold,
    marginVertical: '4%',
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.title,
  },
  page: {
    marginVertical: '3%',
  },
  buttonContainerStyle: {
    width: wp('60%'),
    marginVertical: hp('3%'),
    marginHorizontal: wp('2%'),
  },
  buttonStyle: {
    paddingVertical: wp('4%'),
  },
  buttonTitleStyle: {
    fontSize: wp('5%'),
    fontFamily: constants.fontMedium,
    textAlign: 'center',
  },
  buttonview: {
    flexDirection: 'row',
    bottom: 20,
  },
  tabContainer: {
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.strip,
  },
  indicatorStyle: {
    backgroundColor: colors.primaryBlue,
  },
  itemButton: {
    flexDirection: 'row',
    paddingVertical: wp('3'),
    backgroundColor: colors.appBackground,
  },
  tabViewItem: {
    backgroundColor: 'red',
    width: '100%',
    height: 100,
  },
  profile: {
    width: '30%',
    height: '58%',
    marginTop: '6%',
    borderRadius: 30,
    borderColor: colors.iconDefaultColor,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: '3%',
  },
  profiletext: {
    paddingHorizontal: '5%',
    color: colors.textblack,
  },
  bottomview: {width: '100%', bottom: 30},
});
