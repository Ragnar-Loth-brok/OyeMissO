import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SiteManage from '../screens/SiteManagement/SiteManage';
import EditSite from '../screens/SiteManagement/EditSite';
import ExternalPage from '../screens/SiteManagement/ExternalPage';
import EditAbout from '../screens/SiteManagement/EditAbout';
import PageLink from '../screens/SiteManagement/PageLink';
import EditLink from '../screens/SiteManagement/EditLink';

type RootStackParamList = {
  SiteManage: undefined;
  EditSite: undefined;
  ExternalPage: undefined;
  EditAbout: undefined;
  PageLink: undefined;
  EditLink: undefined;
};

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export default function SiteNavigation() {
  // Todo -  header back logo change according to the figma
  return (
    <Stack.Navigator
      initialRouteName="SiteManage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SiteManage" component={SiteManage} />
      <Stack.Screen name="EditSite" component={EditSite} />
      <Stack.Screen name="ExternalPage" component={ExternalPage} />
      <Stack.Screen name="EditAbout" component={EditAbout} />
      <Stack.Screen name="PageLink" component={PageLink} />
      <Stack.Screen name="EditLink" component={EditLink} />
    </Stack.Navigator>
  );
}
