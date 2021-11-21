/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';
import Pages from './src/screens/Dashboard';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return <Navigation />;
};

export default App;
