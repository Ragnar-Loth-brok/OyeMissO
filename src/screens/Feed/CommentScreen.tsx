import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Icon} from '@rneui/base';
import {Input} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import CommentComponent from '../../components/Feeds/CommentComponent';
import ReactionsHeader from '../../components/Headers/ReactionsHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import Messanger from '../../assets/icons/messanger.svg';

export default function CommentScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = () => {
    navigation.goBack();
  };
  let arr = [
    {
      time: 2,
      likes: 23,
      comments: 40,
      name: 'Michelle Sufi',
      avatar:
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: 'Russia withdraws troops near Ukraine. but I found the market price to recover quite slowly.Read more...',
    },
    {
      time: 3,
      likes: 3,
      comments: 0,
      name: 'Alex Mora Moa',
      avatar:
        'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      text: 'Glad Im on this sinking ship with u all. Makes drowning less....awful?',
    },
    {
      time: 6,
      likes: 0,
      comments: 0,
      name: 'Alecia Micuk',
      avatar:
        'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
      text: 'Getting nervous, trying to clear up my schedule so i can stare at the screen for a  hr or so when US opens',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ReactionsHeader goBack={goBack} title="Comments (250)" />
      <FlatList
        data={arr}
        renderItem={({item, index}) => (
          <CommentComponent key={index} data={item} />
        )}
      />

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.subcontainer}>
        <Input
          placeholder="Type your comment..."
          placeholderTextColor={colors.iconDefaultColor}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          rightIcon={<Messanger />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  inputContainerStyle: {
    borderBottomWidth: wp('0%'),
    backgroundColor: colors.textColor,
    borderRadius: wp('30%'),
    paddingVertical: hp('0.8%'),
    marginTop: '3%',
  },
  inputStyle: {
    fontSize: wp('4%'),
    marginLeft: wp('5%'),
    fontFamily: constants.fontMedium,
  },
  subcontainer: {
    backgroundColor: 'white',
    elevation: 50,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
  },
});
