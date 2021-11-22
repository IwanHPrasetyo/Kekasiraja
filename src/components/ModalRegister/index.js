import React from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {colors, icon} from '../../theme';
import Styles from './styles';

const ModalRegister = ({modalVisible, setModalVisible}) => {
  return (
    <View>
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
            <View style={Styles.viewOrder}>
              <TextInput
                style={Styles.inputText}
                placeholder="Nama Toko"
                placeholderTextColor={colors.fontSub1}
              />
              <TextInput
                style={Styles.inputText}
                placeholder="Username"
                placeholderTextColor={colors.fontSub1}
              />
              <TextInput
                style={Styles.inputText}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={colors.fontSub1}
              />
            </View>
            <View style={Styles.viewFooter}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={Styles.daftar}>
                <Text style={Styles.fontTitle}>Daftar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalRegister;
