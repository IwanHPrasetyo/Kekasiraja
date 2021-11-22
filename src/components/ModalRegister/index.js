import React from 'react';
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
import {registerUser} from '../../helpers/sqlDatabase';

const ModalRegister = ({modalVisible, setModalVisible}) => {
  const register = value => {
    registerUser(value)
      .then(() => {
        setModalVisible(!modalVisible);
        ToastAndroid.show('registrasi berhasil', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show('Gagal melakukan registrasi', ToastAndroid.SHORT);
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
            <icon.FontAwesome5 style={Styles.iconHeader} name="user" />
            <Text style={Styles.fontTitle} numberOfLines={1}>
              Daftar Toko
            </Text>
          </View>
          <Formik
            initialValues={{
              nama_toko: '',
              username: '',
              password: '',
            }}
            onSubmit={values => register(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <View style={Styles.viewOrder}>
                  <TextInput
                    onChangeText={handleChange('nama_toko')}
                    style={Styles.inputText}
                    placeholder="Nama Toko"
                    value={values.nama_toko}
                    placeholderTextColor={colors.fontSub1}
                  />
                  <TextInput
                    onChangeText={handleChange('username')}
                    style={Styles.inputText}
                    placeholder="Username"
                    value={values.username}
                    placeholderTextColor={colors.fontSub1}
                  />
                  <TextInput
                    onChangeText={handleChange('password')}
                    style={Styles.inputText}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={values.password}
                    placeholderTextColor={colors.fontSub1}
                  />
                </View>
                <View style={Styles.viewFooter}>
                  <Pressable
                    //  setModalVisible(!modalVisible)
                    onPress={handleSubmit}
                    style={Styles.daftar}>
                    <Text style={Styles.fontTitle}>Daftar</Text>
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

export default ModalRegister;
