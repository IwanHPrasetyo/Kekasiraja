import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {icon} from '../../theme';
import Styles from './styles';

const ListPesanan = ({setModalVisible}) => {
  return (
    <Pressable onPress={() => setModalVisible(true)} style={Styles.container}>
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
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          padding: 10,
        }}>
        <Text style={Styles.fontTitle}>Nomer Pesanan</Text>
        <Text style={Styles.fontCount}>Rp. 200.000</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <icon.Ionicons
          style={{fontSize: 30, color: '#ffa502'}}
          name="clipboard-outline"
        />
      </View>
    </Pressable>
  );
};

export default ListPesanan;
