import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {colors, icon} from '../../theme';
import ListProduct from '../../components/ListProduct';
import Styles from './styles';
import ListItemCart from '../../components/ListItemCart';

const Cart = ({navigation}) => {
  const [kategori, setKetegori] = useState(true);
  return (
    <View style={Styles.container}>
      <View style={Styles.viewHeader}>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <icon.MaterialIcons
            onPress={() => navigation.goBack()}
            style={{fontSize: 30, color: '#fff'}}
            name="arrow-back"
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={Styles.fontHeader}>Daftar Pesanan</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <icon.FontAwesome5
            onPress={() => navigation.navigate('Cart')}
            style={{fontSize: 30, color: '#fff'}}
            name="clipboard-check"
          />
        </View>
      </View>

      <View style={{flex: 10}}>
        <ScrollView>
          <ListItemCart />
        </ScrollView>
      </View>
      <View style={Styles.viewMenu}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginBottom: 5,
            paddingHorizontal: 5,
          }}>
          <Text style={[Styles.fontTotal, {flex: 1}]}>Total</Text>
          <Text style={[Styles.fontTotal, {flex: 1, textAlign: 'right'}]}>
            Rp. 200.000
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('MainTab')}
          style={Styles.buttonFood}>
          <Text style={Styles.fontTitle}>Buat Pesanan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
