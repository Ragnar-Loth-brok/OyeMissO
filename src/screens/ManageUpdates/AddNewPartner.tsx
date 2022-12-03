import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Avatar, BottomSheet, Icon, Text} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import constants from '../../assets/constants';
import {ManageScreenData} from '../../assets/localization/default';
import colors from '../../assets/colors';

import UpdateCheckBox from '../../components/ManageUpdates/UpdateCheckBox';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';
import Placeholder from '../../assets/images/placeholder.svg';
import CustomInput from '../../components/Auth/CustomInput';
import CustomButton from '../../components/UI/CustomButton';
import SuccessOverlay from '../../components/ManageUpdates/SuccessOverlay';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const SCALE_FACTOR = (hp(100) / constants.deviceDefaultHeight) * 1.1;

export default function AddNewPartner() {
  const [type, setType] = useState({imgType: '', imageUri: '', avatarId: 0});
  const [selectedOption, setSelectedption] = useState(0);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(val => !val);
  };

  const setOption = (id: number) => {
    setSelectedption(id);
  };
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title="Add New Partner" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: hp(2)}}
        contentContainerStyle={styles.contentstyle}>
        <View>
          <Avatar
            size={hp(15)}
            imageProps={{resizeMode: 'cover'}}
            source={type.imageUri ? {uri: type.imageUri} : undefined}
            renderPlaceholderContent={
              <Placeholder style={{transform: [{scale: SCALE_FACTOR}]}} />
            }
            rounded
          />
          <Icon
            name="camera"
            type="evilicon"
            size={hp(2.6)}
            color={colors.white}
            backgroundColor={colors.iconReverseColor}
            borderRadius={hp(6)}
            iconStyle={{
              paddingHorizontal: hp(0.5),
              paddingVertical: hp(0.7),
            }}
            containerStyle={styles.iconContainer}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>{ManageScreenData.info}</Text>
          <Text style={styles.title}>{ManageScreenData.user}</Text>
          <CustomInput
            inputType="default"
            placeholder="Your name"
            width="100%"
          />
          <Text style={styles.title}>{ManageScreenData.email}</Text>
          <CustomInput inputType="default" placeholder="Email" width="100%" />
          <Text style={styles.heading}>{ManageScreenData.receive}</Text>
          <UpdateCheckBox
            title="Daily"
            id={1}
            setOption={setOption}
            selectedOption={selectedOption}
          />
          <UpdateCheckBox
            title="Weekly"
            id={2}
            setOption={setOption}
            selectedOption={selectedOption}
          />
          <UpdateCheckBox
            title="Monthly"
            id={3}
            setOption={setOption}
            selectedOption={selectedOption}
          />
          <UpdateCheckBox
            title="Quarterly"
            id={4}
            setOption={setOption}
            selectedOption={selectedOption}
          />
        </View>
      </ScrollView>

      <CustomButton
        title="Add New Subscriber"
        onPress={toggleModal}
        revert={false}
      />
      <BottomSheet
        isVisible={modal}
        onBackdropPress={toggleModal}
        backdropStyle={{backgroundColor: colors.modalBackgroundColor}}>
        <SuccessOverlay onPress={toggleModal} />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: hp(2),
  },
  contentstyle: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: hp(2),
    paddingBottom: hp(4),
    alignItems: 'center',
  },
  subContainer: {
    paddingHorizontal: wp(4),
  },
  heading: {
    fontSize: hp(2.1),
    fontFamily: constants.fontBold,
    color: colors.appBlack,
    marginVertical: hp(2),
  },
  title: {
    color: colors.textSecondary,
    fontSize: hp(1.8),
    marginVertical: hp(2),
  },
  iconContainer: {
    position: 'absolute',
    bottom: hp(0),
    left: hp(5.8),
  },
});
