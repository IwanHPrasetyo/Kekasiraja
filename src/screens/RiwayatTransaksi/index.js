import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {icon} from '../../theme';
import ListPesanan from '../../components/ListPesanan';
import Styles from './styles';
import ModalPesanan from '../../components/ModalPesanan';

const RiwayatTransaksi = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Styles.container}>
      <ModalPesanan
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
          <ListPesanan setModalVisible={setModalVisible} />
        </ScrollView>
      </View>
    </View>
  );
};
export default RiwayatTransaksi;
