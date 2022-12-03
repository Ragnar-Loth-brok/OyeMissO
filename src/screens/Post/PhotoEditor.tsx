import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {BoxBlur, Brightness} from 'react-native-image-filter-kit';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import WritePostHeader from '../../components/Headers/WritePostHeader';
import ImageFilter from '../../components/UI/ImageFilter';
import Filter from './Filter';

import colors from '../../assets/colors';
import MediaCard from '../../components/Search/MediaCard';
import {StackNavigationProp} from '@react-navigation/stack';

type ParamList = {
  Post: {
    uri: string;
  };
};

export default function PhotoEditor() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const route = useRoute<RouteProp<ParamList, 'Post'>>();

  const goBack = () => {
    navigation.goBack();
  };

  const [imageUri, setImageUri] = useState(
    'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80',
  );
  const [extractedUri, setExtractedUri] = useState(
    'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80',
  );
  // const extractedUri = useRef('');
  const [selectedFilterIndex, setIndex] = useState(0);
  const [blur, setBlur] = useState(1);
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    if (route.params) {
      setExtractedUri(route.params.uri);
      setImageUri(route.params.uri);
    }
  }, [route.params]);

  const onExtractImage = (arg: {nativeEvent: any}) => {
    setExtractedUri(arg.nativeEvent.uri);
  };

  const onSelectFilter = (selectedIndex: number) => {
    setIndex(selectedIndex);
    setBrightness(1);
    setBlur(1);
  };

  const SelectedFilterComponent = Filter[selectedFilterIndex].filterComponent;

  const FilteredImage = () => {
    return (
      <Brightness
        image={
          <BoxBlur
            image={
              <SelectedFilterComponent
                image={
                  <MediaCard
                    editMode={false}
                    editNavigation={() => {}}
                    imageUri={extractedUri}
                  />
                }
              />
            }
            radius={blur}
          />
        }
        amount={brightness}
        onExtractImage={onExtractImage}
        extractImageEnabled={true}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <WritePostHeader title="Edit Photo" goBack={goBack} icon={false} />
      <View style={styles.subcontainer}>
        {selectedFilterIndex === 0 && blur === 1 && brightness === 1 ? (
          <MediaCard
            editMode={false}
            editNavigation={() => {}}
            imageUri={imageUri}
          />
        ) : (
          <FilteredImage />
        )}
      </View>
      <View style={styles.bottom}>
        <ImageFilter
          imageUri={imageUri}
          onSelectFilter={onSelectFilter}
          blur={blur}
          setBlur={setBlur}
          brightness={brightness}
          setBrightness={setBrightness}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textColor,
    justifyContent: 'space-between',
  },
  subcontainer: {justifyContent: 'center', alignItems: 'center'},
  bottom: {
    backgroundColor: colors.appBackground,
    height: wp(50),
    paddingVertical: wp('6'),
    borderRadius: wp('4'),
    paddingHorizontal: wp('3'),
    width: wp('100'),
    alignSelf: 'center',
    overflow: 'hidden',
  },
});
