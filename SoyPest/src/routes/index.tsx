import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" translucent />

    <View style={{flex: 1, backgroundColor: '#312e38'}}>
      <App.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#312e38'},
        }}>
        <App.Screen name="Welcome" component={Welcome} />
        <App.Screen name="Dashboard" component={Dashboard} />
      </App.Navigator>
    </View>
  </NavigationContainer>
);

export default Routes;
