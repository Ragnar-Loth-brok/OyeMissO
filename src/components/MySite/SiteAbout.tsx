import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Image} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function SiteAbout() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>We are an organization on a missio.</Text>
      <Image
        borderRadius={wp(4)}
        style={styles.imageStyle}
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }}
      />
      <Text style={styles.post}>
        {constants.Message}
        {constants.Message}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    paddingBottom: hp(17),
  },
  heading: {
    fontSize: wp(5.2),
    color: colors.heading,
    fontFamily: constants.fontBold,
    marginVertical: hp(1),
  },
  imageStyle: {
    height: hp(24),
    width: '100%',
    // border
  },
  post: {
    fontSize: wp(3.7),
    lineHeight: hp(3),
    marginVertical: hp(1),
  },
});
