import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Image} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import imageData from './postschunk';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  myPostNavigation: () => void;
};

export default function PostsImageView({myPostNavigation}: Props) {
  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: hp(12)}}>
      <Pressable
        onPress={myPostNavigation}
        style={{
          width: wp(100),
          paddingHorizontal: wp(0.3),
          overflow: 'hidden',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="cover"
            containerStyle={styles.coverImage}
            source={{uri: imageData[0].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Pressable
            onPress={myPostNavigation}
            // style={{justifyContent: 'space-between'}}
          >
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[1].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[2].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
          </Pressable>
        </Pressable>

        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[3].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[4].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[5].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
        </Pressable>

        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={myPostNavigation}>
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[6].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[7].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
          </Pressable>
          <Image
            resizeMode="cover"
            containerStyle={styles.coverImage}
            source={{uri: imageData[8].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
        </Pressable>
        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[3].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[4].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[5].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
        </Pressable>
        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="cover"
            containerStyle={styles.coverImage}
            source={{uri: imageData[0].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Pressable
            onPress={myPostNavigation}
            // style={{justifyContent: 'space-between'}}
          >
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[1].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[2].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
          </Pressable>
        </Pressable>

        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[3].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[4].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[5].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
        </Pressable>

        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={myPostNavigation}>
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[6].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
            <Image
              resizeMode="cover"
              containerStyle={styles.defaultSize}
              source={{uri: imageData[7].imageUri}}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
              // }}
            />
          </Pressable>
          <Image
            resizeMode="cover"
            containerStyle={styles.coverImage}
            source={{uri: imageData[8].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
        </Pressable>
        <Pressable
          onPress={myPostNavigation}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[3].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[4].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
          <Image
            resizeMode="cover"
            containerStyle={styles.defaultSize}
            source={{uri: imageData[5].imageUri}}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
            // }}
          />
        </Pressable>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    width: wp(66.2),
    height: hp(32),
  },
  defaultSize: {
    width: wp(33),
    height: hp(15.9),
    marginBottom: hp(0.2),
  },
});
