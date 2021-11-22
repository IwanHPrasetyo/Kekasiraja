import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {icon} from '../../theme';
import ListPesanan from '../../components/ListPesanan';
import Styles from './styles';

const RiwayatTransaksi = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.viewHeader}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <icon.FontAwesome5
            style={{fontSize: 30, color: '#fff'}}
            name="shopping-bag"
          />
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={Styles.fontTitle}>Riwayat Pesanan</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <icon.Ionicons style={{fontSize: 30, color: '#fff'}} name="layers" />
        </View>
      </View>
      <View style={{flex: 9}}>
        <ScrollView>
          <ListPesanan />
          <ListPesanan />
          <ListPesanan />
          <ListPesanan />
          <ListPesanan />
          <ListPesanan />
          <ListPesanan />
        </ScrollView>
      </View>
    </View>
  );
};
export default RiwayatTransaksi;
