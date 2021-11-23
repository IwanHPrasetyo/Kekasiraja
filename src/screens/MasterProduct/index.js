import React, {useState, useEffect} from 'react';
import {Pressable, ScrollView, Text, View, FlatList} from 'react-native';
import {colors, icon} from '../../theme';
import ListProduct from '../../components/ListProduct';
import Styles from './styles';
import {getItem} from '../../helpers/sqlDatabase';

const MasterProduct = ({navigation}) => {
  const [kategori, setKetegori] = useState(true);
  const [item, setItem] = useState([]);

  useEffect(() => {
    onItem();
  }, [kategori]);

  const onItem = () => {
    getItem()
      .then(result => {
        let filValue = kategori ? 'Makanan' : 'Minuman';
        let fil = result.filter(data => data.kategori == filValue);
        setItem(fil);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
          <Text style={Styles.fontHeader}>Daftar Product</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <icon.Feather style={{fontSize: 30, color: '#fff'}} name="plus" />
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
        <FlatList
          data={item}
          renderItem={data => {
            return <ListProduct data={data} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MasterProduct;
