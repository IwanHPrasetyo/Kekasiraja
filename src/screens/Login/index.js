import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Pressable,
  ToastAndroid,
} from 'react-native';
import ModalRegister from '../../components/ModalRegister';
import {getItem, loginuser} from '../../helpers/sqlDatabase';
import {colors} from '../../theme';
import Styles from './styles';

const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onLogin = data => {
    loginuser(data)
      .then(() => {
        ToastAndroid.show('Berhasil Login', ToastAndroid.SHORT);
        // navigation.navigate('MainTab');
      })
      .catch(() => {
        ToastAndroid.show('Gagal Login', ToastAndroid.SHORT);
      });
  };

  return (
    <ScrollView
      style={Styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <View style={Styles.viewHeader}>
        <ModalRegister
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Image
          style={Styles.imageLogin}
          source={require('../../assets/images/cashier.jpg')}
        />
      </View>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={values => onLogin(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={Styles.viewForm}>
              <Text style={Styles.fontTitle}>Login</Text>
              <TextInput
                style={Styles.inputText}
                placeholder="Username"
                onChangeText={handleChange('username')}
                value={values.username}
                placeholderTextColor={colors.fontSub1}
              />
              <TextInput
                style={Styles.inputText}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}
                placeholderTextColor={colors.fontSub1}
              />
              <Text style={Styles.fontForgot}>Lupa Kata Sandi ?</Text>
            </View>
            <View style={Styles.viewFooter}>
              <Pressable onPress={handleSubmit} style={Styles.buttonLogin}>
                <Text style={Styles.fontLogin}>Login</Text>
              </Pressable>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={Styles.fontRegister}>
                  Anda belum punya akun ?{' '}
                </Text>
                <Text
                  onPress={() => setModalVisible(!modalVisible)}
                  style={Styles.fontRegister2}>
                  Daftar Disini
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Login;
