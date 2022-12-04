import React, {useCallback, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Animated, {
  runOnUI,
  scrollTo,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import PostsImageView from './PostsImageView';

import colors from '../../assets/colors';
import SiteTabButton from './SiteTabButton';
import SiteAbout from './SiteAbout';

const WIDTH = wp(100);
const HEIGHT = hp(80);

type Props = {
  myPostNavigation: () => void;
};

type Event = {
  nativeEvent: {
    layout: {
      height: number;
    };
  };
};

export default function SiteTabBar({myPostNavigation}: Props) {
  const scrollRef = useAnimatedRef<any>();
  const [index, setIndex] = useState(0);

  const animateHeight = useSharedValue(HEIGHT);
  const scrollViewHeights = useSharedValue<any>([]);

  const layoutFunc = useCallback(
    (event: Event, id: number) => {
      console.log(scrollViewHeights.value, id);

      if (scrollViewHeights.value.length > 2) {
        return null;
      } else if (scrollViewHeights.value.length === id) {
        const {layout} = event.nativeEvent;
        scrollViewHeights.value.push(layout.height);
      }
    },
    [scrollViewHeights.value],
  );

  const heightChange = (value: number) => {
    animateHeight.value = withDelay(
      15,
      withTiming(scrollViewHeights.value[value], {
        duration: 100,
      }),
    );
  };

  const changeTab = (value: number) => {
    'worklet';
    scrollTo(scrollRef, WIDTH * value, 0, true);
  };

  const onTabChange = (tabNumber: number) => {
    setIndex(tabNumber);
    runOnUI(changeTab)(tabNumber);
    setTimeout(() => {
      heightChange(tabNumber);
    }, 200);
  };

  const heightStyles = useAnimatedStyle(() => {
    return {
      height: animateHeight.value,
    };
  });

  return (
    <View style={[{backgroundColor: colors.appBackground}]}>
      <View style={styles.tabContainer}>
        <Pressable
          style={styles.press}
          onPress={() => {
            onTabChange(0);
          }}>
          <Icon
            name="document"
            type="custom-icon"
            containerStyle={styles.subcontainer}
            color={index === 0 ? colors.iconColor : colors.placeholder}
            size={wp(6)}
          />
        </Pressable>
        <Pressable
          style={styles.press}
          onPress={() => {
            onTabChange(1);
          }}>
          <Icon
            name="map"
            type="custom-icon"
            containerStyle={styles.container}
            color={index === 1 ? colors.iconColor : colors.placeholder}
            size={wp(6)}
          />
        </Pressable>
        <Pressable
          style={styles.press}
          onPress={() => {
            onTabChange(2);
          }}>
          <Icon
            name="about"
            type="custom-icon"
            containerStyle={styles.subcontainer}
            color={index === 2 ? colors.iconColor : colors.placeholder}
            size={wp(6)}
          />
        </Pressable>
      </View>
      <Animated.ScrollView
        horizontal={true}
        nestedScrollEnabled
        scrollEnabled={false}
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.scrollViewStyle]}
        style={[{width: wp(100)}, heightStyles]}
        pagingEnabled
        scrollEventThrottle={wp(100)}>
        <View collapsable={false} onLayout={event => layoutFunc(event, 0)}>
          <PostsImageView myPostNavigation={myPostNavigation} />
        </View>
        <View
          style={styles.buttonTabContainer}
          collapsable={false}
          onLayout={event => layoutFunc(event, 1)}>
          <SiteTabButton title="Add File or Link" dashedBorder />
          <SiteTabButton title="Watch Our Documentary" dashedBorder={false} />
          <SiteTabButton title="Feed The Children" dashedBorder={false} />
          <SiteTabButton title="Training Videos" dashedBorder={false} />
          <SiteTabButton title="World Map" dashedBorder={false} />
          <SiteTabButton title="T-shirts" dashedBorder={false} />
        </View>
        <View collapsable={false} onLayout={event => layoutFunc(event, 2)}>
          <SiteAbout />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    width: wp(100),
    borderBottomWidth: 0.8,
    borderColor: colors.border,
    justifyContent: 'space-around',
  },
  press: {
    paddingVertical: wp(3),
  },
  container: {
    borderLeftWidth: wp(0.3),
    borderRightWidth: wp(0.3),
    width: wp(33),
    borderColor: colors.border,
    paddingVertical: hp(1),
  },
  subcontainer: {
    width: wp(33),
    paddingVertical: wp(1.5),
  },
  subview: {
    backgroundColor: colors.appBackground,
    width: wp(100),
  },
  scrollViewStyle: {
    // width: '300%',
    alignItems: 'flex-start',
  },
  buttonTabContainer: {
    width: wp(100),
    paddingHorizontal: wp(4),
    justifyContent: 'center',
    paddingVertical: hp(1),
    paddingBottom: hp(15),
  },
});
