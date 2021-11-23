import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import {colors, icon} from '../../theme';
import Styles from './styles';
import {addItem} from '../../helpers/sqlDatabase';
import {Picker} from '@react-native-picker/picker';

const ModalProduct = ({modalVisible, setModalVisible}) => {
  const onItem = value => {
    console.log('data valuee');
    console.log(value);
    addItem(value)
      .then(result => {
        setModalVisible(!modalVisible);
        ToastAndroid.show('Tambah item berhasil', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show('Tambah item gagal', ToastAndroid.SHORT);
      });
  };
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={Styles.centeredView}>
        <View style={Styles.modalView}>
          <View style={Styles.viewHeader}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={Styles.closeButton}>
              <icon.FontAwesome style={Styles.iconHeader} name="close" />
            </Pressable>
            <icon.Ionicons style={Styles.iconHeader} name="fast-food" />
            <Text style={Styles.fontTitle} numberOfLines={1}>
              Tambah Product
            </Text>
          </View>
          <Formik
            initialValues={{
              nama: '',
              harga: '',
              qty: '',
              kategori: 'Makanan',
            }}
            onSubmit={values => onItem(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <View style={Styles.viewOrder}>
                  <TextInput
                    onChangeText={handleChange('nama')}
                    style={Styles.inputText}
                    placeholder="Nam Product"
                    value={values.nama}
                    placeholderTextColor={colors.fontSub1}
                  />
                  <TextInput
                    keyboardType={'number-pad'}
                    onChangeText={handleChange('harga')}
                    style={Styles.inputText}
                    placeholder="Harga"
                    value={values.harga}
                    placeholderTextColor={colors.fontSub1}
                  />
                  <Picker
                    selectedValue={values.kategori}
                    onValueChange={handleChange('kategori')}>
                    <Picker.Item label="Makanan" value="Makanan" />
                    <Picker.Item label="Minuman" value="Minuman" />
                  </Picker>
                  <TextInput
                    onChangeText={handleChange('qty')}
                    style={Styles.inputText}
                    placeholder="Qty"
                    keyboardType={'number-pad'}
                    value={values.qty}
                    placeholderTextColor={colors.fontSub1}
                  />
                </View>
                <View style={Styles.viewFooter}>
                  <Pressable onPress={handleSubmit} style={Styles.daftar}>
                    <Text style={Styles.fontTitle}>Simpan</Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProduct;
