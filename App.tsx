import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {registerCustomIconType} from '@rneui/base';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import colors from './src/assets/colors';
import Icon from './src/assets/icons/icon-font';
import configureStore from './src/store/configureStore';
import RootNavigation from './src/navigation/RootNavigation';

const store = configureStore();

// import RootNavigation from './src/navigation/RootNavigation';

function App() {
  // Setup for react native elements and navigation for bottom bar
  // Setup for redux store
  // implementing light theme for status bar
  registerCustomIconType('custom-icon', Icon);
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.appBackground}
      />
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
