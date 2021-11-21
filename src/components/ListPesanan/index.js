import React from 'react';
import {Text, View} from 'react-native';
import {icon} from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './styles';

const ListPesanan = ({}) => {
  return (
    <View style={Styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <icon.Ionicons
          style={{fontSize: 40, color: '#ffa502'}}
          name="fast-food"
        />
      </View>
      <View style={{flex: 3, backgroundColor: 'pink'}}></View>
      <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      {/* <Text>No Transaksi</Text> */}
    </View>
  );
};

export default ListPesanan;
