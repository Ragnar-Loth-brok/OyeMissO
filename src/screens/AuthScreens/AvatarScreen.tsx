import React, {useCallback, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {Layout} from 'react-native-reanimated';

import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {AvatarScreenData} from '../../assets/localization/default';

import Placeholder from '../../assets/images/placeholder.svg';
import NextButton from '../../components/UI/NextButton';
import Strip from '../../components/UI/Strip';
import InitialsUI from '../../components/Auth/InitialsUI';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import TickCheckbox from '../../components/UI/TickCheckbox';
import {setDpType} from '../../store/auth';
import {ScrollView} from 'react-native-gesture-handler';

const SCALE_FACTOR = (hp(100) / constants.deviceDefaultHeight) * 1.1;

type Option = 1 | 0;

type ImageType = {
  imgType: 'avatar' | 'img';
  imageUri: string;
};

export default function AvatarScreen() {
  const [type, setType] = useState<ImageType>({
    imgType: 'avatar',
    imageUri: '',
  });
  const [selectedOption, setSelectedption] = useState<Option>(1);

  const dispatch = useDispatch();

  const navigation = useNavigation<StackNavigationProp<any>>();

  const siteSetupNavigation = () => {
    dispatch(setDpType(type));
    navigation.navigate('SiteSetup');
  };

  const launchGallery = async () => {
    try {
      const image = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (image.assets && image.assets[0].uri) {
        setType({imageUri: image.assets[0].uri, imgType: 'img'});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{position: 'absolute', top: 0}}>
        <DefaultHeader goBack={goBack} text={null} title="" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.profiletext}>{AvatarScreenData.profileText}</Text>
        <Pressable
          onPress={() => setSelectedption(0)}
          style={[
            styles.subcontainer,
            {
              borderColor:
                selectedOption === 0 ? colors.primaryDefault : colors.border,
            },
          ]}>
          <TickCheckbox
            id={0}
            selectedOption={selectedOption}
            setOption={setSelectedption}
          />
          <Avatar
            size={hp(15)}
            imageProps={{resizeMode: 'cover'}}
            source={type.imageUri ? {uri: type.imageUri} : undefined}
            renderPlaceholderContent={
              <Placeholder style={{transform: [{scale: SCALE_FACTOR}]}} />
            }
            rounded
          />

          <Text onPress={launchGallery} style={styles.uploadtext}>
            {AvatarScreenData.uploadText}
          </Text>
        </Pressable>
        <Strip text="OR" width="85%" />
        <Pressable
          onPress={() => setSelectedption(1)}
          style={[
            styles.subcontainer,
            {
              borderColor:
                selectedOption === 1 ? colors.primaryDefault : colors.border,
            },
          ]}>
          <TickCheckbox
            id={1}
            selectedOption={selectedOption}
            setOption={setSelectedption}
          />
          <InitialsUI name="ZM" />
          <Text style={styles.initialText}>{AvatarScreenData.intialsText}</Text>
        </Pressable>
        {selectedOption === 1 && (
          <Text style={styles.avatarMessage}>
            If you choose the initials then your uploaded photo will be removed.
          </Text>
        )}

        <Animated.View
          layout={Layout.duration(200)}
          style={{paddingBottom: hp(6)}}>
          <NextButton onPress={siteSetupNavigation} />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    flex: 1,
    alignItems: 'center',
    width: wp('100%'),
  },
  profiletext: {
    fontSize: hp(3.5),
    fontFamily: constants.fontMedium,
    marginTop: hp(3.5),
    color: colors.appBlack,
    marginBottom: hp(2.5),
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1.5),
    width: '85%',
    borderRadius: wp(4),
    borderColor: colors.border,
    paddingHorizontal: wp(1),
    borderWidth: 1,
    paddingVertical: hp(1),
  },
  uploadtext: {
    color: colors.iconColor,
    marginTop: hp(3),
    marginBottom: hp(2),
    fontSize: hp(2.3),
    fontFamily: constants.fontMedium,
  },
  initialText: {
    fontSize: hp(2.2),
    fontFamily: constants.fontMedium,
    alignSelf: 'center',
    color: colors.black,
    textAlign: 'center',
    marginTop: hp(2.5),
    marginBottom: hp(2),
    marginHorizontal: '5%',
    lineHeight: hp(3),
  },
  nextview: {
    marginVertical: hp('3%'),
  },
  avatarMessage: {
    color: colors.textPrimary,
    fontSize: hp(1.8),
    width: '85%',
    marginVertical: hp(1),
  },
  scrollContent: {
    alignItems: 'center',
    width: wp('100%'),
    paddingTop: hp(5),
  },
});
