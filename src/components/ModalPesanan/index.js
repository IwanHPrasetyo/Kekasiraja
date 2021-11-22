import React from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {icon} from '../../theme';
import Styles from './styles';

const ModalPesanan = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <View style={Styles.viewHeader}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={Styles.closeButton}>
                <icon.FontAwesome style={Styles.iconHeader} name="close" />
              </Pressable>
              <icon.FontAwesome5
                style={Styles.iconHeader}
                name="shopping-bag"
              />
              <Text style={Styles.fontTitle} numberOfLines={1}>
                Nomer Transaksi
              </Text>
            </View>
            <View style={Styles.viewOrder}>
              <ScrollView>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
                <Text style={Styles.fontPesanan}>Pesanan 1</Text>
              </ScrollView>
            </View>
            <View style={Styles.viewFooter}>
              <View style={Styles.viewSubFooter1}>
                <Text style={Styles.fontTitle}>TOTAL</Text>
              </View>
              <View style={Styles.viewSubFooter2}>
                <Text style={Styles.fontTitle}>Rp.200.000</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPesanan;
