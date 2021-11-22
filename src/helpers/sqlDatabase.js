import SQLite from 'react-native-sqlite-storage';

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
          reject();
          console.log('gagal get data');
        },
      );
    });
  });
};
