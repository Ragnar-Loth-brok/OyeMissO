import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import Strip from '../../components/UI/Strip';

import {Button, Icon, Text} from '@rneui/themed';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import constants from '../../assets/constants';
import colors from '../../assets/colors';
import WritePostHeader from '../../components/Headers/WritePostHeader';
import PreferencesUI from '../../components/Search/PreferencesUI';
import {StackNavigationProp} from '@react-navigation/stack';

export default function Preferences() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const goBack = () => {
    navigation.goBack();
  };

  const publishedNavigation = () => {
    navigation.navigate('Published');
  };

  return (
    <SafeAreaView style={styles.container}>
      <WritePostHeader title="Write Post" goBack={goBack} icon />
      <View style={{paddingHorizontal: wp(3)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subcontainer}>
            <Text style={styles.heading}>Posting Preferences</Text>
            <Strip width="100%" text={false} />
          </View>
          <View>
            <PreferencesUI
              defaultId={2}
              title="Highlight this post"
              text="(Set this at the top of my scheduled email update. Use this to
            showcase your most important updates.)"
            />
            <PreferencesUI
              defaultId={1}
              title="Set this as a temporary post."
              text="(Disappears after 1 month)"
            />
            <PreferencesUI defaultId={1} title="Show giving link" text={null} />
            <View style={{marginBottom: wp(3)}}>
              <Strip text={false} width={wp('100%')} />
            </View>
            <PreferencesUI
              defaultId={2}
              title="Push this post out immediately to all my subscribers."
              text="(Only use for urgent posts when necessary)"
            />
            <Text style={styles.heading}>Hashtags</Text>
            <View style={styles.checkboxContainer}>
              <View style={styles.Hashcontainer}>
                <Text style={styles.text}>hashtag </Text>
                <Icon
                  size={wp('5')}
                  name="close"
                  color={colors.appBackground}
                  type="ionicons"
                />
              </View>
              <View style={styles.Hashcontainer}>
                <Text style={styles.text}>hashtag </Text>
                <Icon
                  size={wp('5')}
                  name="close"
                  color={colors.appBackground}
                  type="ionicons"
                />
              </View>
              <View style={styles.Hashcontainer}>
                <Text style={styles.text}>hashtag </Text>
                <Icon
                  size={wp('5')}
                  name="close"
                  color={colors.appBackground}
                  type="ionicons"
                />
              </View>
            </View>
          </View>
          <View style={styles.emptyView} />
        </ScrollView>
      </View>
      <View style={styles.bottomview}>
        <Button
          onPress={publishedNavigation}
          radius={30}
          title="Publish"
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    // paddingHorizontal: wp('3'),
  },
  heading: {
    fontSize: wp('5'),
    fontFamily: constants.fontBold,
    marginVertical: wp('3%'),
  },
  subcontainer: {
    marginVertical: wp('1'),
  },
  checkboxContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: wp('2%'),
    borderRadius: wp(3),
    // width: wp('95%'),
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Hashcontainer: {
    backgroundColor: colors.primary,
    // width: wp('28%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp('1.5'),
    paddingHorizontal: wp('3'),
    borderRadius: wp(3),
    marginVertical: wp('2'),
    marginHorizontal: wp('1'),
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    color: colors.appBackground,
    fontSize: wp('4%'),
    fontFamily: constants.fontMedium,
  },
  buttonContainerStyle: {
    width: '90%',
    elevation: 10,
  },
  buttonStyle: {
    paddingVertical: wp(3),
  },
  buttonTitleStyle: {
    fontSize: wp('5%'),
    fontFamily: constants.fontBold,
  },
  emptyView: {height: wp(50)},
  push: {
    marginVertical: wp('2'),
  },
  checkboxview: {flexDirection: 'row'},
  bottomview: {
    position: 'absolute',
    bottom: 0,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadowColor,
    elevation: 10,
    paddingVertical: wp(8),
    backgroundColor: colors.appBackground,
  },
  stripview: {marginTop: hp('5%')},
  centerstrip: {marginHorizontal: wp('5%')},
  link: {
    width: wp('90%'),
    justifyContent: 'center',
  },
});
