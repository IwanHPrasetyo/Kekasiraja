import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLogin = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = JSON.stringify(data);
      await AsyncStorage.setItem('@user', value);
      resolve();
    } catch (error) {
      reject();
    }
  });
};

export const getLogin = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem('@user');
      value != null ? resolve(JSON.parse(value)) : reject();
      console.log(JSON.parse(value));
    } catch (error) {
      reject();
    }
  });
};
