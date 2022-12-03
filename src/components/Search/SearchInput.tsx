import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, SearchBar} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

type Props = {
  search: string;
  updateSearch: (search: string) => void;
};

export default function SearchInput({search, updateSearch}: Props) {
  return (
    <SearchBar
      placeholder="Search"
      underlineColorAndroid="transparent"
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputStyle}
      searchIcon={
        <Icon
          name="search"
          type="feather"
          size={hp(2.5)}
          color={colors.placeholder}
          containerStyle={styles.iconStyle}
        />
      }
      onChangeText={updateSearch}
      value={search}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 0,
    marginHorizontal: wp(2),
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginBottom: hp('2'),
    paddingHorizontal: wp(1.5),
  },
  inputContainer: {
    borderRadius: wp(20),
    margin: 0,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  inputStyle: {
    paddingVertical: hp(1.2),
    margin: 0,
    fontSize: hp(2),
    color: colors.heading,
    borderBottomWidth: 0,
  },
  iconStyle: {
    marginLeft: wp(2),
  },
});
