import React, {useCallback, useMemo} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Image} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import colors from '../../assets/colors';

import Placeholder1 from '../../assets/icons/addpost/placeholder1.svg';
import UserSite from '../../components/MySite/UserSite';
import SiteTabBar from '../../components/MySite/SiteTabBar';

import Animated, {
  Extrapolation,
  interpolate,
  Layout,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {StackNavigationProp} from '@react-navigation/stack';

const OpacityHeight = hp(30);
const StatusBarHeight = StatusBar.currentHeight || 20;
const viewMaxHeight = Platform.OS === 'ios' ? hp(90) : hp(100);

export default function MySite() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const opacity = useSharedValue(0);

  const myPostNavigation = useCallback(() => {
    navigation.navigate('MyPosts');
  }, [navigation]);

  const myProfileNavigation = useCallback(() => {
    navigation.navigate('MyProfile');
  }, [navigation]);

  // const myEditNavigation = useCallback(() => {
  //   navigation.navigate('EditSite');
  // }, [navigation]);

  const EditSite = useCallback(() => {
    navigation.navigate('SiteManagement', {screen: 'EditSite'});
  }, [navigation]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      opacity.value = e.contentOffset.y;
    },
  });

  const opacityStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(
      opacity.value,
      [0, OpacityHeight],
      [0, 0.4],
      {extrapolateRight: Extrapolation.CLAMP},
    );

    return {
      backgroundColor: `rgba(0, 0, 0, ${opacityValue})`,
    };
  }, [opacity.value]);

  const imageTransViewStyles = useMemo(
    () => [styles.coverImage, opacityStyle],
    [opacityStyle],
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Image
          resizeMode="cover"
          containerStyle={styles.coverImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
            // uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
          }}
          // source={{
          //   uri: 'https://images.unsplash.com/photo-1611024847487-e26177381a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
          // }}
          PlaceholderContent={
            <Placeholder1 style={{transform: [{scale: wp('0.34')}]}} />
          }
        />
        <Animated.View
          layout={Layout.springify()}
          style={imageTransViewStyles}
        />
      </View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}>
        <Animated.View style={styles.imageTransView} />

        <UserSite
          navigateProfile={myProfileNavigation}
          navigateEdit={EditSite}
        />
        {/* <UserSite
          navigateEdit={myEditNavigation}
          navigateProfile={myProfileNavigation}
        /> */}

        <View style={styles.subcontainer}>
          <SiteTabBar myPostNavigation={myPostNavigation} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
  },
  coverImage: {
    position: 'absolute',
    top: -StatusBarHeight,
    height: hp(44),
    width: wp(100),
  },
  imageTransView: {
    width: wp(100),
    height: hp(40) - StatusBarHeight,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  subcontainer: {
    maxHeight: viewMaxHeight,
  },
});
