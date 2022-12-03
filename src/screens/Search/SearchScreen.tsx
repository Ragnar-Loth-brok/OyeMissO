import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import colors from '../../assets/colors';

import SearchInput from '../../components/Search/SearchInput';
import SearchCard from '../../components/Search/SearchCard';
import SearchTab from '../../components/Search/SearchTab';
import Animated, {
  Layout,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
} from 'react-native-reanimated';

interface CardChunk {
  time: number | null;
  likes: number | null;
  comments: number | null;
  key: string;
  name: string;
  avatar: string;
  imageUrl: string;
  title: string;
  text: string;
}

interface CardState {
  app: {
    search: {profileData: [CardChunk]};
  };
}

export default function SearchScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const cardData = useSelector(
    (state: CardState) => state.app.search.profileData,
  );

  const [search, setSearch] = useState('');

  const postNavigate = (data: {}) => {
    navigation.navigate('Post', {data});
  };

  const reactionsNavigate = () => {
    navigation.navigate('Reaction');
  };

  const updateSearch = (keyword: string) => {
    setSearch(keyword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.View
          layout={Layout}
          entering={SlideInUp.springify().damping(18)}>
          <SearchInput search={search} updateSearch={updateSearch} />
        </Animated.View>
      </View>

      {search ? (
        <SearchTab
          search={search}
          reactionsNavigate={reactionsNavigate}
          postNavigate={postNavigate}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.subcontainer}>
          {cardData.map((item, index) => (
            <Animated.View
              key={item.key}
              layout={Layout}
              entering={
                index === 0 || index % 2 === 0
                  ? SlideInLeft.delay(index > 1 ? (index > 3 ? 300 : 200) : 100)
                  : SlideInRight.delay(
                      index > 1 ? (index > 3 ? 300 : 200) : 100,
                    )
              }>
              <SearchCard title={item.title} imageUrl={item.imageUrl} />
            </Animated.View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: colors.appBackground,
    paddingTop: wp(5),
    justifyContent: 'center',
  },
  subcontainer: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    flexWrap: 'wrap',
    marginBottom: hp(5),
    justifyContent: 'space-between',
    backgroundColor: colors.textColor,
  },
});
