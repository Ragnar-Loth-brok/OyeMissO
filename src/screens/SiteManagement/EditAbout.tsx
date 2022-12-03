import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {BottomSheet, Icon, Image, Input} from '@rneui/themed';
import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import constants from '../../assets/constants';
import {SiteManageData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/Overlay/CustomButton';
import DefaultModal from '../../components/Overlay/DefaultModal';

export default function EditAbout() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(val => !val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title="Edit About Page" />
      <ScrollView>
        <View>
          <Input
            placeholder="We are an organization on a mission."
            placeholderTextColor={colors.appBlack}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            containerStyle={styles.inputContainer}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.coverImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
            }}
          />
          <Icon
            name="trash-2"
            type="feather"
            color={colors.iconReverseColor}
            size={wp(5)}
            reverse
            reverseColor={colors.appBackground}
            containerStyle={styles.iconContainer}
          />
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>{SiteManageData.About}</Text>
          <Text style={styles.text}>{SiteManageData.Aboutdata}</Text>
        </View>
      </ScrollView>
      <CustomButton title="Save" onClicked={toggleModal} />
      <BottomSheet
        isVisible={modal}
        onBackdropPress={toggleModal}
        backdropStyle={{backgroundColor: colors.modalBackgroundColor}}>
        <DefaultModal
          type="success"
          buttonText="OK"
          title="Saved Successfully"
          message=""
          onPress={() => setModal(false)}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: 30,
    marginLeft: wp(1),
    paddingVertical: wp(2),
  },
  inputStyle: {
    fontSize: wp(4),
    marginLeft: 15,
    color: colors.textgrey,
  },
  inputContainer: {
    marginTop: hp(2),
  },
  coverImage: {
    height: hp(28),
    width: wp(95),
    marginHorizontal: wp(3),
    borderRadius: wp(6),
    bottom: wp(2),
  },
  iconContainer: {
    position: 'absolute',
    bottom: wp(40),
    right: wp(3),
  },
  text: {
    fontSize: hp(2),
    fontFamily: constants.fontMedium,
    color: colors.heading,
    lineHeight: 20,
    paddingVertical: hp(3),
    marginHorizontal: wp(5),
  },
  subcontainer: {
    backgroundColor: colors.textColor,
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    margin: wp(3),
  },
});
