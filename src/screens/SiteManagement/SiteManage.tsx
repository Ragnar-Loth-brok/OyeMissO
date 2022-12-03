import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Button, Divider} from '@rneui/base';
import {Icon, TabView} from '@rneui/themed';
import React, {useCallback, useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
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
import Eye from '../../assets/icons/eye.svg';
import Person from '../../assets/icons/person.svg';
import Mail from '../../assets/icons/mail.svg';

type Props = {
  text: string;
  number: string;
  iconType: string;
  title: string;
  showbutton: boolean;
};

const icons = type => {
  switch (type) {
    case 'people':
      return <Eye />;
    case 'partner':
      return <Person />;
    case 'email':
      return <Mail />;
  }
};
const Header = (props: Props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.subtext}>{props.text}</Text>
    <View style={styles.subcontainer}>
      <Text style={styles.numbertext}>{props.number}</Text>
      {icons(props.iconType)}
    </View>
    {props.title && <Text style={styles.titletext}>{props.title}</Text>}
    {props.showbutton && (
      <Button
        radius={wp(15)}
        title="Manage Email Issues"
        type="outline"
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.bottomStyle}
        titleStyle={styles.buttonTitleStyle}
      />
    )}
  </View>
);

export default function SiteManage() {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const EditSite = useCallback(() => {
    navigation.navigate('EditSite');
  }, [navigation]);

  const ExternalPage = useCallback(() => {
    navigation.navigate('ExternalPage');
  }, [navigation]);

  const EditAbout = useCallback(() => {
    navigation.navigate('EditAbout');
  }, [navigation]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const appStyle = useMemo(() => {
    return {
      tabOneTitle: [
        {color: index === 0 ? colors.iconColor : colors.iconDefaultColor},
        styles.tabTitle,
      ],
      tabTwoTitle: [
        {color: index === 1 ? colors.iconColor : colors.iconDefaultColor},
        styles.tabTitle,
      ],
      tabOneContainer: [
        {
          backgroundColor:
            index === 0 ? colors.appBackground : colors.textColor,
          width: '50%',
        },
      ],
      tabTwoContainer: [
        {
          backgroundColor:
            index === 1 ? colors.appBackground : colors.textColor,
          width: '50%',
        },
      ],
    };
  }, [index]);

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader goBack={goBack} text={null} title="" />
      <StripHeader title="Site Management" />
      <View style={styles.tabContainer}>
        <Button
          title="Analytics"
          type="clear"
          onPress={() => {
            setIndex(0);
          }}
          radius={wp(5)}
          titleStyle={appStyle.tabOneTitle}
          containerStyle={appStyle.tabOneContainer}
        />
        <Button
          title="Site Info"
          type="clear"
          onPress={() => {
            setIndex(1);
          }}
          radius={wp(5)}
          titleStyle={appStyle.tabTwoTitle}
          containerStyle={appStyle.tabTwoContainer}
        />
      </View>
      <TabView
        disableSwipe
        value={index}
        onChange={setIndex}
        animationConfig={{
          useNativeDriver: true,
          duration: 320,
          bounciness: 3,
        }}>
        <TabView.Item>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{width: wp(100)}}>
            <Header
              text="How many people have visited my site?"
              iconType="people"
              number="20,154"
              showbutton={false}
              title="You’ve had 75 views in the last month"
            />
            <Header
              text="How many partners do i have?"
              iconType="partner"
              number="250"
              showbutton={false}
              title="You added 15 new partners in the last month"
            />
            <Header
              text="What % of my emails are being opened?"
              iconType="email"
              number="75%"
              showbutton={true}
              title=""
            />
          </ScrollView>
        </TabView.Item>
        <TabView.Item>
          <View>
            <View style={styles.searchCardContainer}>
              <Text style={styles.text}>{SiteManageData.title}</Text>
              <Text style={styles.addtext}>{SiteManageData.family}</Text>
              <Text style={styles.text}>{SiteManageData.Description}</Text>
              <Text style={styles.addtext}>{SiteManageData.edit}</Text>
              <Divider
                width={1}
                color={colors.border}
                orientation="horizontal"
                style={styles.divider}
              />
              <Text style={styles.bottomtext}>{SiteManageData.datecreate}</Text>
              <Text style={styles.bottomtext}>{SiteManageData.url}</Text>
              <View style={styles.editbottom}>
                <Text style={styles.edittext} onPress={EditSite}>
                  {SiteManageData.bottomtext}
                </Text>
                <Icon
                  name="chevron-thin-right"
                  type="entypo"
                  color={colors.heading}
                  size={wp(4)}
                  iconStyle={styles.bottomicon}
                />
              </View>
            </View>
            <Pressable style={styles.bottomview} onPress={ExternalPage}>
              <Text style={styles.text}>{SiteManageData.linkbutton}</Text>
              <Icon
                name="chevron-thin-right"
                type="entypo"
                color={colors.primaryBlue}
                size={wp(4)}
                iconStyle={styles.bottombuttonicon}
              />
            </Pressable>
            <Pressable style={styles.bottomview} onPress={EditAbout}>
              <Text style={styles.text}>{SiteManageData.pagetext}</Text>
              <Icon
                name="chevron-thin-right"
                type="entypo"
                color={colors.primaryBlue}
                size={wp(4)}
                iconStyle={styles.bottombuttonicon}
              />
            </Pressable>
          </View>
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  searchCardContainer: {
    backgroundColor: colors.textColor,
    width: wp('90%'),
    padding: wp(4),
    marginLeft: wp(5),
    borderRadius: wp(5),
    marginTop: hp(3),
  },
  subtext: {
    fontSize: hp(1.8),
    color: colors.placeholder,
    fontFamily: constants.fontBold,
    width: '75%',
    lineHeight: hp(2.8),
  },
  bottomview: {
    width: wp('90%'),
    padding: wp(4),
    marginLeft: wp(5),
    borderRadius: wp(4),
    marginTop: wp(6),
    backgroundColor: colors.textColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabTitle: {
    fontSize: hp(1.6),
    // fontFamily: constants.fontMedium,
    letterSpacing: 0.5,
  },
  text: {
    fontSize: hp(2),
    color: colors.heading,
    fontFamily: constants.fontBold,
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numbertext: {
    fontSize: hp(3.2),
    color: colors.heading,
  },
  addtext: {
    color: colors.heading,
    // fontFamily: constants.fontMedium,
    marginVertical: hp(1),
  },
  bottomtext: {
    color: colors.grey,
    marginVertical: hp(1),
  },

  tabContainer: {
    flexDirection: 'row',
    padding: 4,
    marginHorizontal: wp(4),
    backgroundColor: colors.textColor,
    borderRadius: wp(8),
    marginTop: hp(3),
  },
  iconstyle: {
    backgroundColor: colors.textColor,
    borderRadius: hp(5),
    padding: hp(2),
  },

  titletext: {
    fontSize: hp(1.8),
    color: colors.primaryBlue,
    marginVertical: hp(0.8),
  },
  buttonContainerStyle: {
    marginTop: hp(1),
  },
  buttonTitleStyle: {
    fontSize: hp('1.9'),
    fontFamily: constants.fontBold,
    color: colors.primaryBlue,
  },
  bottomStyle: {
    borderColor: colors.primaryBlue,
    borderWidth: 1,
    paddingVertical: hp(0.7),
  },
  headerContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2.5),
    marginHorizontal: wp(4),
    borderRadius: wp(5),
    marginTop: hp(2.5),
  },
  divider: {width: '100%', marginVertical: hp(2.5)},
  editbottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  edittext: {
    textAlign: 'center',
    fontSize: hp(2.2),
    color: colors.heading,
    fontFamily: constants.fontBold,
    marginTop: hp(1),
  },
  bottomicon: {marginTop: wp(2)},
  bottombuttonicon: {marginTop: hp(0.5)},
});
