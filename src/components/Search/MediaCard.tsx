import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Image} from '@rneui/themed';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Placeholder1 from '../../assets/icons/addpost/placeholder1.svg';
import colors from '../../assets/colors';

export default function MediaCard(props: {
  imageUri: string;
  editMode: boolean;
  editNavigation: (uri: string) => void;
}) {
  return (
    <View>
      <Image
        resizeMode="cover"
        containerStyle={styles.image}
        source={props.imageUri ? {uri: props.imageUri} : {}}
        PlaceholderContent={
          <Placeholder1 style={{transform: [{scale: wp('0.34')}]}} />
        }
      />
      {props.editMode && (
        <Icon
          onPress={() => props.editNavigation(props.imageUri)}
          containerStyle={styles.container}
          name="edit"
          type="feather"
          size={15}
          color={colors.primary}
          reverse
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {position: 'absolute', right: wp(3), top: wp(6)},
  image: {
    width: wp('93'),
    height: wp('54'),
    borderRadius: wp('3'),
    marginVertical: wp('5'),
    marginRight: wp('1'),
  },
});
