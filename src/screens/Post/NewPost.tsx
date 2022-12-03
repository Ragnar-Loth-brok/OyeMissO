import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import Add from '../../assets/icons/addpost/add.svg';
import Placeholder1 from '../../assets/icons/addpost/placeholder1.svg';
import {Button, Icon, Image, Input, Text} from '@rneui/themed';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {launchImageLibrary} from 'react-native-image-picker';
import MediaCard from '../../components/Search/MediaCard';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import WritePostHeader from '../../components/Headers/WritePostHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function NewPost() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const richText = React.useRef(null);
  interface ImagesList {
    type: string;
    uri: string;
  }

  const [images, setImages] = useState<{type: string; uri: string}[]>([]);

  const editNavigation = (uri: string) => {
    navigation.navigate('Edit', {uri});
  };

  const preferencesNavigation = () => {
    navigation.navigate('Preferences');
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  const launchGallery = async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (response.assets && response.assets[0].uri) {
        setImages([
          ...images,
          {
            uri: response.assets[0].uri,
            type: response.assets[0].duration ? 'video' : 'photo',
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <WritePostHeader title="Write Post" goBack={goBack} icon />
      <View style={styles.subview}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subcontainer}>
            <View style={styles.photoview}>
              <Text style={styles.phototext}>Photos/Videos</Text>
              <Add onPress={launchGallery} style={styles.add} />
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={
                <Image
                  resizeMode="cover"
                  containerStyle={styles.image}
                  PlaceholderContent={<Placeholder1 style={styles.place} />}
                />
              }
              keyExtractor={(a: ImagesList, index: number) => index.toString()}
              data={images}
              renderItem={({item}) => (
                <MediaCard
                  editMode
                  editNavigation={editNavigation}
                  imageUri={item.uri}
                />
              )}
            />
          </View>
          <View>
            <Input
              placeholder="Write a good title..."
              multiline
              containerStyle={styles.inputcontainer}
              inputStyle={styles.inputstyle}
              inputContainerStyle={styles.inputcontainerstyle}
              placeholderTextColor="#C7C7C7"
            />
            <Text style={styles.number}>0/30</Text>
          </View>
          <View style={styles.bottomcontainer}>
            <View style={styles.bottomsubcontainer}>
              <Icon
                name="close"
                type="evilicons"
                color={colors.primary}
                size={wp('7')}
                borderRadius={wp(0.8)}
                backgroundColor={colors.checkboxCheckedBg}
                containerStyle={{width: wp('8')}}
                reverseColor="red"
              />
            </View>
            <RichToolbar
              selectedIconTint={colors.primary}
              editor={richText}
              actions={[
                actions.setBold,
                actions.setItalic,
                actions.setUnderline,
                actions.setStrikethrough,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.insertLink,
              ]}
              iconMap={{
                [actions.insertBulletsList]: ({tintColor}) => (
                  <Icon
                    size={15}
                    name="sequnce"
                    color={tintColor}
                    type="custom-icon"
                  />
                ),
                [actions.insertOrderedList]: ({tintColor}) => (
                  <Icon
                    size={17}
                    name="numbersequnce"
                    color={tintColor}
                    type="custom-icon"
                  />
                ),
                [actions.insertLink]: ({tintColor}) => (
                  <Icon
                    size={17}
                    name="filter"
                    color={tintColor}
                    type="custom-icon"
                  />
                ),
              }}
            />
            <RichEditor
              placeholder="Tell your story..."
              // eslint-disable-next-line react-native/no-inline-styles
              editorStyle={{
                placeholderColor: '#C7C7C7',
              }}
              androidHardwareAccelerationDisabled
              ref={richText}
              onChange={(descriptionText: string) => {
                console.log('descriptionText:', descriptionText);
              }}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomview}>
        <Button
          onPress={preferencesNavigation}
          radius={30}
          title="Continue"
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
    flex: 1,
    backgroundColor: colors.appBackground,
    // paddingHorizontal: wp('3'),
    width: wp('100'),
  },
  buttonContainerStyle: {
    width: wp('90%'),
    marginVertical: '3%',
    alignSelf: 'center',
  },
  buttonStyle: {
    paddingVertical: wp('3'),
    elevation: 10,
    backgroundColor: colors.primary,
  },
  buttonTitleStyle: {
    fontSize: wp('5'),
    fontFamily: constants.fontBold,
  },
  subcontainer: {
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  subview: {paddingHorizontal: wp(3)},
  photoview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: wp('3'),
  },
  phototext: {
    fontSize: wp('4.5'),
    fontFamily: constants.fontBold,
    letterSpacing: 0.4,
  },
  add: {transform: [{scale: wp('0.24')}]},
  image: {
    width: wp('93'),
    height: wp('54'),
    borderRadius: wp('3'),
    marginVertical: wp('5'),
  },
  place: {transform: [{scale: wp('0.34')}]},
  inputcontainer: {marginTop: wp('2')},
  inputstyle: {
    fontFamily: constants.fontMedium,
    letterSpacing: 0.5,
    fontSize: wp('7'),
    lineHeight: wp('9'),
  },
  inputcontainerstyle: {
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  number: {
    fontSize: wp(3),
    position: 'absolute',
    right: wp('3'),
    top: wp('19.1'),
    color: colors.placeholder,
  },
  bottomcontainer: {marginVertical: wp(2)},
  bottomsubcontainer: {alignItems: 'flex-end'},
  bottomview: {
    position: 'absolute',
    bottom: 0,
    width: wp('100'),
    backgroundColor: colors.appBackground,
    paddingTop: wp(3),
    paddingBottom: wp(6),
    elevation: 10,
    shadowColor: colors.shadowColor,
  },
});
