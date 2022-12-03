import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Tab, TabView} from '@rneui/themed';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import BottomTextComponent from './BottomTextComponent';
import {GuideScreenData} from '../../assets/localization/default';

export default function Guide() {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={styles.tabcontainer}
          buttonStyle={styles.tabbutton}>
          <Tab.Item
            containerStyle={styles.containerstyle}
            icon={{
              name: 'home',
              type: 'Custom icon',
              color: 'black',
              reverse: index === 0 ? true : false,
              size: index === 0 ? wp(5) : wp(7),
            }}
          />
          <Tab.Item
            containerStyle={styles.containerstyle}
            icon={{
              name: 'search',
              type: 'feather',
              color: 'black',
              reverse: index === 1 ? true : false,
              size: index === 1 ? wp(5) : wp(7),
            }}
          />
          <Tab.Item
            containerStyle={styles.containerstyle}
            icon={{
              name: 'add',
              type: 'Custom icon',
              color: 'black',
              reverse: index === 2 ? true : false,
              size: index === 2 ? wp(5) : wp(7),
            }}
          />
          <Tab.Item
            containerStyle={styles.containerstyle}
            icon={{
              name: 'bell',
              type: 'feather',
              color: 'black',
              reverse: index === 3 ? true : false,
              size: index === 3 ? wp(5) : wp(7),
            }}
          />
          <Tab.Item
            containerStyle={styles.containerstyle}
            icon={{
              name: 'user',
              type: 'feather',
              color: 'black',
              reverse: index === 4 ? true : false,
              size: index === 4 ? wp(5) : wp(7),
            }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item>
            <BottomTextComponent
              title={GuideScreenData.homeText}
              text={GuideScreenData.homemessage}
              bottom={GuideScreenData.homebuttonText}
            />
          </TabView.Item>
          <TabView.Item>
            <BottomTextComponent
              title={GuideScreenData.searchText}
              text={GuideScreenData.searchmessage}
              bottom={GuideScreenData.homebuttonText}
            />
          </TabView.Item>
          <TabView.Item>
            <BottomTextComponent
              title={GuideScreenData.postText}
              text={GuideScreenData.postmessage}
              bottom={GuideScreenData.homebuttonText}
            />
          </TabView.Item>
          <TabView.Item>
            <BottomTextComponent
              title={GuideScreenData.notificationText}
              text={GuideScreenData.notificationmessage}
              bottom={GuideScreenData.homebuttonText}
            />
          </TabView.Item>
          <TabView.Item>
            <BottomTextComponent
              title={GuideScreenData.siteText}
              text={GuideScreenData.sitemessage}
              bottom={GuideScreenData.sitebuttonText}
            />
          </TabView.Item>
        </TabView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.border,
  },
  subcontainer: {
    position: 'absolute',
    backgroundColor: colors.appBackground,
    width: '100%',
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    height: '40%',
    bottom: 0,
  },
  tabcontainer: {
    backgroundColor: colors.primaryDefault,
    height: wp(0.8),
    width: wp(9),
    marginHorizontal: wp(5.8),
  },
  tabbutton: {
    height: wp(16),
  },
  containerstyle: {marginTop: wp(5)},
});
