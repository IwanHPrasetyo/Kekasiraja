import React from 'react';
import Styles from './styles';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {icon} from '../../theme';
import ListPesanan from '../../components/ListPesanan';

const Dashboard = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.viewHeader}>
        <View style={Styles.cardIncome}>
          <View style={Styles.subHeader}>
            <View style={Styles.subCardHeaderA}>
              <Text style={Styles.fontTitle}>Total Pesanan</Text>
              <Text style={Styles.fontCount}>0</Text>
            </View>
            <View style={Styles.subCardHeaderB}>
              <Text style={Styles.fontTitle}>Pesanan Baru</Text>
              <Text style={Styles.fontCount}>0</Text>
            </View>
          </View>
          <View style={Styles.subHeader}>
            <View style={Styles.subCardHeaderC}>
              <Text style={Styles.fontTitle}>Pesanan Selesai</Text>
              <Text style={Styles.fontCount}>0</Text>
            </View>
            <View style={Styles.subCardHeaderD}>
              <Text style={Styles.fontTitle}>Pesanan Batal</Text>
              <Text style={Styles.fontCount}>0</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1.4,
          justifyContent: 'center',
          backgroundColor: '#fff',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Pressable
          style={{
            marginTop: '25%',
            height: '40%',
            width: '40%',
            marginRight: '5%',
            borderRadius: 10,
            borderColor: '#ffa502',
            borderWidth: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <icon.MaterialIcons
            style={{fontSize: 40, color: '#ffa502'}}
            name="food-bank"
          />
          <Text style={Styles.fontTitle2}>Item Tersedia</Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: '25%',
            height: '40%',
            width: '40%',
            marginLeft: '5%',
            borderRadius: 10,
            borderColor: '#ffa502',
            borderWidth: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <icon.FontAwesome5
            style={{fontSize: 40, color: '#ffa502'}}
            name="cash-register"
          />
          <Text style={Styles.fontTitle2}>Pemesanan</Text>
        </Pressable>
      </View>
      <View style={Styles.viewFooter}>
        <Text style={Styles.fontTitle}>Pesanan Dalam Proses</Text>
        <ScrollView>
          <ListPesanan />
          <ListPesanan />
          <ListPesanan />
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;
