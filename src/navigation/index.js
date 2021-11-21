import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  //   CardStyleInterpolators,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import DashboardScreen from '../screens/Dashboard';

const MainStack = createNativeStackNavigator();
const SubStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <SubStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <SubStack.Screen name="Login" component={LoginScreen} />
      <SubStack.Screen name="Dashboard" component={DashboardScreen} />
    </SubStack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name="MainScreen" component={MainStackScreen} />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);
