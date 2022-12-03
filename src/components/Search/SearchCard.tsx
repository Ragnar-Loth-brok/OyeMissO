import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text, Card, Icon} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

export default function SearchCard(props: {title: string; imageUrl: string}) {
  return (
    <Card containerStyle={styles.container}>
      <Card.Image
        style={styles.imageStyle}
        resizeMode="cover"
        source={{
          uri: props.imageUrl,
        }}
      />
      <View style={styles.subContainer}>
        <Text style={[styles.title]}>{props.title}</Text>
        <Pressable style={styles.pressableStyle}>
          <Text style={styles.site}>visit site </Text>
          <Icon
            size={hp(1)}
            name="rightarrow"
            color={colors.primary}
            type="custom-icon"
            containerStyle={{
              transform: [{translateY: hp('0.2')}],
            }}
          />
        </Pressable>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1.4),
    marginHorizontal: 0,
    padding: 0,
    paddingBottom: hp(2.5),
    backgroundColor: colors.appBackground,
    borderRadius: wp('3.5%'),
    elevation: 5,
    borderWidth: 0,
    shadowColor: colors.shadowColor,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    overflow: 'hidden',
  },
  subContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: hp(1.6),
    letterSpacing: 0.5,
    lineHeight: hp(3.2),
    marginTop: hp('2'),
    fontFamily: constants.fontMedium,
    color: colors.black,
    textAlign: 'center',
  },
  site: {
    letterSpacing: 0.8,
    color: colors.primary,
    fontSize: hp(1.5),
    marginTop: hp(0.6),
    marginBottom: hp(0.7),
  },
  imageStyle: {
    width: wp(44.5),
    height: hp(10.5),
  },
  pressableStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
