import React from 'react';
import Styles from './styles';
import {View, Text, ScrollView} from 'react-native';
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
      <View style={{flex: 1.4, backgroundColor: 'pink'}}></View>
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
