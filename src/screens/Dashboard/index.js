import React from 'react';
import {View, Text} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      {/* <Text>Dashboard</Text> */}
      <View style={{flex: 1, backgroundColor: 'pink'}}></View>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
    </View>
  );
};

export default Dashboard;
