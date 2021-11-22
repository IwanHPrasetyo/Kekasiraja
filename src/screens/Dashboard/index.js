import React from 'react';
import Styles from './styles';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {icon} from '../../theme';
import {time} from '../../utils';
import ListPesanan from '../../components/ListPesanan';

const Dashboard = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.viewHeader}>
        <View style={Styles.viewTitleShop}>
          <icon.Entypo style={Styles.iconShope} name="shop" />
          <Text style={Styles.fontUser}>Kekasir Cafe</Text>
          <Text style={Styles.fontTime}>{time.time1}</Text>
        </View>
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
      <View style={Styles.viewMenu}>
        <Pressable
          onPress={() => {
            navigation.navigate('MasterProduct');
          }}
          style={Styles.buttonItem}>
          <icon.MaterialIcons style={Styles.iconButton} name="food-bank" />
          <Text style={Styles.fontTitle2}>Item Tersedia</Text>
        </Pressable>
        <Pressable style={Styles.buttonPesan}>
          <icon.FontAwesome5 style={Styles.iconButton} name="cash-register" />
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
