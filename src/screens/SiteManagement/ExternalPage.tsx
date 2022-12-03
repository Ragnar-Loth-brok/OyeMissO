import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import PageButton from '../../components/ManageUpdates/PageButton';
import CustomButton from '../../components/Overlay/CustomButton';
import {useNavigation} from '@react-navigation/native';

import StripHeader from '../../components/Headers/StripHeader';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import {StackNavigationProp} from '@react-navigation/stack';

export default function ExternalPage() {
  // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(val => !val);
  // };
  const navigation = useNavigation<StackNavigationProp<any>>();

  const PageLink = useCallback(() => {
    navigation.navigate('PageLink');
  }, [navigation]);
  const EditLink = useCallback(() => {
    navigation.navigate('EditLink');
  }, [navigation]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title="External Page Links" />

      <PageButton
        title="Watch Our Documentary"
        manage={true}
        onPress={EditLink}
      />
      <PageButton title="Feed The Children" manage={false} onPress={EditLink} />
      <PageButton title="World Map" manage={true} onPress={EditLink} />
      <PageButton title="T-shirts" manage={true} onPress={EditLink} />
      <View style={styles.bottomview}>
        <CustomButton title="Add New Link" onClicked={PageLink} />
        {/* <BottomSheet isVisible={modal} onBackdropPress={toggleModal}>
          <DefaultModal
            type="gave"
            message="External link added successfully"
            text="OK"
            onPress={() => setModal(false)}
          />
        </BottomSheet> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  bottomview: {position: 'absolute', bottom: 0},
});
