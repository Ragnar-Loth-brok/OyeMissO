import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Divider} from '@rneui/base';
import {BottomSheet, Input} from '@rneui/themed';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../android/app/src/main/assets/custom/colors';
import {SiteManageData} from '../../assets/localization/default';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/Overlay/CustomButton';
import DefaultModal from '../../components/Overlay/DefaultModal';
import CheckboxUI from '../../components/UI/CheckboxUI';

export default function PageLink() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [check, setCheck] = React.useState(1);

  const selectOption = (id: number) => {
    setCheck(id);
  };
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(val => !val);
  };
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <View>
        <StripHeader title="Page/Document Link" />

        <CheckboxUI
          title="Page Link"
          id={1}
          selectOption={selectOption}
          checkId={check}
        />
      </View>
      <Input
        placeholder="Watch Our Documentary"
        placeholderTextColor={colors.appBlack}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="https://www.myexternallink.com"
        placeholderTextColor={colors.appBlack}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />
      <Divider width={1} color={colors.divider} />
      <View>
        <CheckboxUI
          title=" Attach Document"
          id={2}
          selectOption={selectOption}
          checkId={check}
        />
      </View>
      <Input
        placeholder="Document Title"
        placeholderTextColor={colors.placeholder}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Document Link"
        placeholderTextColor={colors.placeholder}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
      />
      <Divider width={1} color={colors.divider} />

      <View style={styles.bottomview}>
        <CustomButton title="Add" onClicked={toggleModal} />
      </View>
      <BottomSheet isVisible={modal} onBackdropPress={toggleModal}>
        <DefaultModal
          type="document"
          title={SiteManageData.document}
          buttonText="OK"
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
    backgroundColor: colors.white,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.textColor,
    borderRadius: 30,
    marginLeft: wp(1),
    paddingVertical: hp(1),
  },
  inputStyle: {
    fontSize: hp(2),
    marginLeft: 15,
    color: colors.textgrey,
  },
  inputContainer: {
    paddingVertical: hp(0.1),
  },
  bottomview: {position: 'absolute', bottom: 0},
});
