import SQLite from 'react-native-sqlite-storage';
import bcrypt from 'react-native-bcrypt';
import {setLogin} from './asyncStorage';

const db = SQLite.openDatabase({
  name: 'kekasir.db',
  createFromLocation: '~kekasir.db',
});

export const getItem = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `Select * from items`,
        [],
        (tx, result) => {
          const rows = result.rows;
          let data = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(rows.item(i));
          }
          resolve(data);
        },
        function (tx, err) {
          console.log(tx);
          reject();
          console.log('gagal get data');
        },
      );
    });
  });
};

export const registerUser = data => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(data.password, salt);
  console.log('register user');
  data.password = hash;
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `insert into user (username, password, nama_toko) values (?,?,?)`,
        [data.username, data.password, data.nama_toko],
        (tx, result) => {
          console.log('berhasil insert');
          const rows = result.rows;
          console.log(rows);
          resolve();
        },
        function (tx, err) {
          reject();
          console.log('gagal get data');
        },
      );
    });
  });
};

export const loginuser = data => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `select * from user where username = ?`,
        [data.username],
        (tx, result) => {
          const rows = result.rows;
          if (rows.length >= 1) {
            let pass = result.rows.item(0).password;
            let veryf = bcrypt.compareSync(data.password, pass);
            if (veryf == true) {
              setLogin(result.rows.item(0))
                .then(() => {
                  console.log('berhasil login');
                  resolve();
                })
                .catch(err => {
                  console.log('gagal login');
                  console.log(err);
                  reject();
                });
            } else {
              reject();
            }
          } else {
            reject();
          }
        },
        function (tx, err) {
          reject();
        },
      );
    });
  });
};

export const addItem = data => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `insert into items (nama, harga, kategori) values (?,?,?)`,
        [data.nama, data.harga, data.kategori],
        (tx, result) => {
          const rows = result.rows;
          resolve();
          console.log('berhasil insert');
        },
        function (tx, err) {
          reject();
          console.log('gagal get data');
        },
      );
    });
  });
};
