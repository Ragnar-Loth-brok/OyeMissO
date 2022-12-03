import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text} from '@rneui/themed';

import colors from '../../assets/colors';
import avatars from '../../assets/images/avatars/avatars';

import AvatarBox from './AvatarBox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AvatarsUI(props: {setAvatar: (id: number) => void}) {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select An Avatar</Text>
      <View style={styles.subContainer}>
        {avatars.map((item, index) => (
          <AvatarBox key={item.id} id={item.id} selectedId={selectedId}>
            <Avatar
              size={64}
              rounded
              key={index}
              renderPlaceholderContent={
                <View>
                  <item.component />
                </View>
              }
              onPress={() => {
                props.setAvatar(item.id);
                setSelectedId(item.id);
              }}
            />
          </AvatarBox>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  subContainer: {
    flexDirection: 'row',
    width: '90%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: wp('4%'),
    borderColor: colors.border,
    borderWidth: 1,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
    marginVertical: hp('2%'),
  },
  text: {
    color: colors.black,
    fontWeight: '600',
    letterSpacing: 0.8,
    fontSize: wp('4%'),
  },
});
