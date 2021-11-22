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
} from 'react-native';
import ModalRegister from '../../components/ModalRegister';
import {getItem} from '../../helpers/sqlDatabase';
import {colors} from '../../theme';
import Styles from './styles';

const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      <View style={Styles.viewForm}>
        <Text style={Styles.fontTitle}>Login</Text>
        <TextInput
          style={Styles.inputText}
          placeholder="Username"
          placeholderTextColor={colors.fontSub1}
        />
        <TextInput
          style={Styles.inputText}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={colors.fontSub1}
        />
        <Text style={Styles.fontForgot}>Lupa Kata Sandi ?</Text>
      </View>
      <View style={Styles.viewFooter}>
        <Pressable
          onPress={() => {
            navigation.navigate('MainTab');
          }}
          style={Styles.buttonLogin}>
          <Text style={Styles.fontLogin}>Login</Text>
        </Pressable>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={Styles.fontRegister}>Anda belum punya akun ? </Text>
          <Text
            onPress={() => setModalVisible(!modalVisible)}
            style={Styles.fontRegister2}>
            Daftar Disini
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
