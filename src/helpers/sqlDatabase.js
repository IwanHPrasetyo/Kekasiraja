import SQLite from 'react-native-sqlite-storage';
import bcrypt from 'react-native-bcrypt';

const db = SQLite.openDatabase({
  name: 'kekasir.db',
  createFromLocation: '~kekasir.db',
});

export const getItem = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `Select * from user`,
        [],
        (tx, result) => {
          const rows = result.rows;
          let data = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(rows.item(i));
          }
          console.log(data);
          resolve(data);
        },
        function (tx, err) {
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
            veryf == true ? resolve() : reject();
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
