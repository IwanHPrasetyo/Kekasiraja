import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, icon} from '../theme';

import LoginScreen from '../screens/Login';
import DashboardScreen from '../screens/Dashboard';
import MasterProductScreen from '../screens/MasterProduct';
import RiwayatTransaksiScreen from '../screens/RiwayatTransaksi';
import DaftarProductScreen from '../screens/DaftarProduct';
import CartScreen from '../screens/Cart';

const MainStack = createNativeStackNavigator();
const SubStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const TabMain = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'desktop' : 'desktop-sharp';
          } else if (route.name === 'RiwayatTransaksi') {
            iconName = focused ? 'basket' : 'basket-outline';
          }

          return <icon.Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.yellowMain,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
        gestureEnabled: false,
      })}>
      <TabStack.Screen name="Dashboard" component={DashboardScreen} />
      <TabStack.Screen
        name="RiwayatTransaksi"
        component={RiwayatTransaksiScreen}
      />
    </TabStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <SubStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <SubStack.Screen name="Login" component={LoginScreen} />
      <SubStack.Screen name="MainTab" component={TabMain} />
      <SubStack.Screen name="MasterProduct" component={MasterProductScreen} />
      <SubStack.Screen name="DaftarProduct" component={DaftarProductScreen} />
      <SubStack.Screen name="Cart" component={CartScreen} />
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
