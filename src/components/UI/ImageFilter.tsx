import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon, Image, Slider, Tab, TabView, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';
import Filter from '../../screens/Post/Filter';

type Props = {
  imageUri: string;
  onSelectFilter: (index: number) => void;
  blur: number;
  setBlur: any;
  brightness: number;
  setBrightness: any;
};

export default function ImageFilter({
  imageUri,
  onSelectFilter,
  blur,
  setBlur,
  brightness,
  setBrightness,
}: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderFilterComponent = (args: {item: any; index: any}) => {
    const FilterComponent = args.item.filterComponent;
    const image = (
      <Image
        onPress={() => onSelectFilter(args.index)}
        containerStyle={styles.filterSelector}
        source={{uri: imageUri}}
        resizeMode={'cover'}
      />
    );
    return <FilterComponent image={image} />;
  };

  return (
    <>
      <TabView
        disableTransition
        disableSwipe
        value={activeIndex}
        onChange={setActiveIndex}
        animationType="timing"
        containerStyle={[
          styles.container,
          {borderTopEndRadius: wp('4'), borderTopStartRadius: wp('4')},
        ]}>
        <TabView.Item style={styles.tabItemStyle}>
          <FlatList
            data={Filter}
            keyExtractor={item => item.title}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderFilterComponent}
          />
        </TabView.Item>
        <TabView.Item style={styles.tabItemStyle}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.subcontainer}>
            <Text style={{color: colors.primary}}>0</Text>
            <Slider
              value={brightness}
              onValueChange={setBrightness}
              maximumValue={10}
              minimumValue={1}
              step={0.1}
              allowTouchTrack
              animationType="timing"
              minimumTrackTintColor={colors.primary}
              // eslint-disable-next-line react-native/no-inline-styles
              trackStyle={styles.track}
              thumbStyle={styles.thumb}
            />
            <Text style={styles.text}>100</Text>
          </View>
        </TabView.Item>
        <TabView.Item style={styles.tabItemStyle}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.subview}>
            <Text style={styles.number}>0</Text>
            <Slider
              value={blur}
              onValueChange={setBlur}
              maximumValue={10}
              minimumValue={1}
              step={0.1}
              allowTouchTrack
              animationType="timing"
              minimumTrackTintColor={colors.textPrimary}
              // eslint-disable-next-line react-native/no-inline-styles
              trackStyle={styles.track}
              thumbStyle={styles.thumbtext}
            />
            <Text style={styles.number}>100</Text>
          </View>
        </TabView.Item>
      </TabView>
      <Tab
        value={activeIndex}
        onChange={e => setActiveIndex(e)}
        containerStyle={[
          styles.container,
          {borderBottomEndRadius: wp('4'), borderBottomStartRadius: wp('4')},
        ]}
        disableIndicator={true}
        variant="primary">
        <Tab.Item buttonStyle={styles.tabbutton}>
          <Icon
            size={wp('7%')}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{paddingHorizontal: 5}}
            name="color-filter-outline"
            color={activeIndex === 0 ? colors.primary : colors.hand}
            type="ionicon"
          />
        </Tab.Item>
        <Tab.Item buttonStyle={styles.tabbutton}>
          <Icon
            size={wp('7%')}
            name="brightness"
            color={activeIndex === 1 ? colors.primary : colors.hand}
            type="custom-icon"
          />
        </Tab.Item>
        <Tab.Item buttonStyle={styles.tabbutton}>
          <Icon
            size={wp('7%')}
            name="blur"
            color={activeIndex === 2 ? colors.primary : colors.hand}
            type="custom-icon"
          />
        </Tab.Item>
      </Tab>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.checkboxCheckedBg,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    width: wp('13'),
    height: wp('13'),
    borderRadius: wp('1'),
    margin: wp('2'),
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  tabItemStyle: {
    width: '100%',
    padding: '2%',
  },
  track: {
    height: 1,
    width: wp('75%'),
    backgroundColor: colors.primary,
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thumb: {
    height: wp('4'),
    width: wp('4'),
    backgroundColor: colors.primary,
  },
  text: {color: colors.primary},
  subview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {color: colors.textPrimary},
  thumbtext: {
    height: wp('4'),
    width: wp('4'),
    backgroundColor: colors.textPrimary,
  },
  tabbutton: {
    // flexDirection: 'row',
    paddingVertical: hp('2.2%'),
    backgroundColor: colors.checkboxCheckedBg,
  },
});
