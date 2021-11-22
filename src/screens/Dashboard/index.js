import React, {useState} from 'react';
import Styles from './styles';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {icon} from '../../theme';
import {time} from '../../utils';
import ListPesanan from '../../components/ListPesanan';
import ModalPesanan from '../../components/ModalPesanan';

const Dashboard = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Styles.container}>
      <ModalPesanan
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={Styles.viewHeader}>
        <View style={Styles.viewTitleShop}>
          <icon.Entypo style={Styles.iconShope} name="shop" />
          <Text style={Styles.fontUser}>Kekasir Cafe</Text>
          <Text style={Styles.fontTime}>{time.time1}</Text>
          <icon.FontAwesome
            onPress={() => navigation.navigate('Login')}
            style={Styles.iconShope}
            name="power-off"
          />
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
        <Pressable
          onPress={() => {
            navigation.navigate('DaftarProduct');
          }}
          style={Styles.buttonPesan}>
          <icon.FontAwesome5 style={Styles.iconButton} name="cash-register" />
          <Text style={Styles.fontTitle2}>Pemesanan</Text>
        </Pressable>
      </View>
      <View style={Styles.viewFooter}>
        <Text style={Styles.fontTitle}>Pesanan Terbaru</Text>
        <ScrollView>
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;
