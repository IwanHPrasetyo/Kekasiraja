import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {colors, icon} from '../../theme';
import ListProduct from '../../components/ListProduct';
import Styles from './styles';

const DaftarProduct = ({navigation}) => {
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
          <Text style={Styles.fontHeader}>Daftar Menu</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <icon.Feather
            onPress={() => navigation.navigate('Cart')}
            style={{fontSize: 30, color: '#fff'}}
            name="shopping-cart"
          />
        </View>
      </View>
      <View style={Styles.viewMenu}>
        <Pressable
          onPress={() => setKetegori(true)}
          style={[
            Styles.buttonFood,
            {
              backgroundColor:
                kategori == true ? colors.yellowMain : colors.primary,
            },
          ]}>
          <Text
            style={[
              Styles.fontTitle,
              {color: kategori == true ? colors.primary : colors.yellowMain},
            ]}>
            Makanan
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setKetegori(false)}
          style={[
            Styles.buttonDrink,
            {
              backgroundColor:
                kategori == false ? colors.yellowMain : colors.primary,
            },
          ]}>
          <Text
            style={[
              Styles.fontTitle,
              {color: kategori == true ? colors.yellowMain : colors.primary},
            ]}>
            Minuman
          </Text>
        </Pressable>
      </View>
      <View style={{flex: 10}}>
        <ScrollView>
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
          <ListProduct />
        </ScrollView>
      </View>
    </View>
  );
};

export default DaftarProduct;
