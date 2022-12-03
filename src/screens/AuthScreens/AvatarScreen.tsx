import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';

import colors from '../../assets/colors';
import constants from '../../assets/constants';

import Placeholder from '../../assets/images/placeholder.svg';
import NextButton from '../../components/UI/NextButton';
import Strip from '../../components/UI/Strip';
import InitialsUI from '../../components/Auth/InitialsUI';
import {AvatarScreenData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {setDpType} from '../../store/auth';
import TickCheckbox from '../../components/UI/TickCheckbox';

const SCALE_FACTOR = (hp(100) / constants.deviceDefaultHeight) * 1.1;

export default function AvatarScreen() {
  const [type, setType] = useState({imgType: '', imageUri: ''});
  const [selectedOption, setSelectedption] = useState(0);

  const setOption = (id: number) => {
    setSelectedption(id);
  };
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
      <DefaultHeader goBack={goBack} text={null} title="" />
      <Text style={styles.profiletext}>{AvatarScreenData.profileText}</Text>

      <View
        style={[styles.subcontainer, {borderWidth: 1, paddingVertical: hp(2)}]}>
        <View style={{alignSelf: 'flex-end'}}>
          <TickCheckbox
            id={0}
            selectedOption={selectedOption}
            setOption={setOption}
          />
        </View>
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
      </View>

      <Strip text="OR" width="85%" />
      <View style={styles.subcontainer}>
        {/* <ZM /> */}
        <View style={{alignSelf: 'flex-end'}}>
          <TickCheckbox
            id={1}
            selectedOption={selectedOption}
            setOption={setOption}
          />
        </View>
        <InitialsUI name="ZM" />
        <Text style={styles.initialText}>{AvatarScreenData.intialsText}</Text>
      </View>
      <NextButton onPress={siteSetupNavigation} />
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
    marginVertical: hp(1),
    width: '85%',
    borderRadius: wp(4),
    borderColor: colors.border,
    paddingHorizontal: wp(4),
  },
  uploadtext: {
    color: colors.iconColor,
    marginTop: hp(3.8),
    marginBottom: hp(4.5),
    fontSize: hp(2.4),
    fontFamily: constants.fontMedium,
  },
  initialText: {
    fontSize: hp(2.2),
    fontFamily: constants.fontMedium,
    alignSelf: 'center',
    color: colors.black,
    textAlign: 'center',
  },
  nextview: {
    marginVertical: hp('3%'),
  },
});
