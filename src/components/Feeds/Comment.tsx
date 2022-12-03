import {Text} from '@rneui/themed';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function Comment(props: {commentNavigation: () => void}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.main}>SalinaDoe</Text>
        <Text style={styles.text}>This project is great, i love it!</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.main}>jasonDoe</Text>
        <Text style={styles.text}>I want to be a part of this project.</Text>
      </View>
      <Pressable
        style={[styles.subContainer]}
        onPress={props.commentNavigation}>
        <Text style={[styles.viewAll]} onPress={props.commentNavigation}>
          view all 250 comments
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('3'),
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  main: {
    color: colors.black,
    fontSize: hp('2'),
    fontFamily: constants.fontBold,
    textAlign: 'center',
  },
  text: {
    fontSize: hp('2'),
    marginVertical: hp('0.7'),
    marginLeft: wp('2'),
  },
  viewAll: {
    fontSize: hp('2'),
    paddingVertical: hp('0.7'),
  },
});
