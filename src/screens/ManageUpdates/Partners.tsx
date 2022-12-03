import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import PartnersAvatar from '../../components/ManageUpdates/PartnersAvatar';
import SearchInput from '../../components/Search/SearchInput';
import partnerdata from './partnerdata';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import StripHeader from '../../components/Headers/StripHeader';
import CustomButton from '../../components/UI/CustomButton';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type PartnersProp = {
  item: {
    key: string;
    name: string;
    avatar: string;
    text: string;
  };
};

export default function Partners() {
  const [searchString, setSeacrhString] = useState('');

  const updateSeacrh = (search: string) => {
    setSeacrhString(search);
  };

  const renderList = ({item}: PartnersProp) => (
    <PartnersAvatar
      key={item.key}
      name={item.name}
      email={item.text}
      url={item.avatar}
      onPress={PartnerInfo}
    />
  );
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const AddNewPartner = useCallback(() => {
    navigation.navigate('NewPartner');
  }, [navigation]);

  const PartnerInfo = useCallback(() => {
    console.log('first');
    navigation.navigate('PartnerInfo');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader title="" text={null} goBack={goBack} />
      <StripHeader title="Partners" />
      {/* <Pressable onPress={PartnerInfo}> */}
      <FlatList
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        data={partnerdata}
        renderItem={renderList}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentStyle}
        ListHeaderComponent={
          <SearchInput search={searchString} updateSearch={updateSeacrh} />
        }
        ListHeaderComponentStyle={{marginTop: hp(2)}}
      />
      {/* </Pressable> */}

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Add New Subscriber"
          onPress={AddNewPartner}
          revert={false}
        />
        <CustomButton title="Import" onPress={() => {}} revert={true} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    width: '100%',
    paddingTop: hp(1),
    paddingBottom: hp(2),
  },
  contentStyle: {
    alignSelf: 'center',
    width: '100%',
  },
});
