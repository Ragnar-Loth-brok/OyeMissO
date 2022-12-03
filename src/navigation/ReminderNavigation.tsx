import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Reminder from '../screens/ReminderScreens/Reminder';
import CustomReminder from '../screens/ReminderScreens/CustomReminder';
import EditReminder from '../screens/ReminderScreens/EditReminder';

type RootStackParamList = {
  Reminder: undefined;
  CustomReminder: undefined;
  EditReminder: undefined;
};

// const Stack = createSTackNav<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export default function ReminderNavigation() {
  // Todo -  header back logo change according to the figma
  return (
    <Stack.Navigator
      initialRouteName="Reminder"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Reminder" component={Reminder} />
      <Stack.Screen name="CustomReminder" component={CustomReminder} />
      <Stack.Screen name="EditReminder" component={EditReminder} />
    </Stack.Navigator>
  );
}
