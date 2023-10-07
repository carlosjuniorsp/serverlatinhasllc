import { openDb } from "../configDB.js";

/**
 * Insert data from table latinhas
 * @param {object} data
 */
export async function saveData(data) {
  openDb();
  openDb().then((database) => {
    database.run(
      "INSERT INTO latinhas (sku, descricao, total) VALUES (?,?,?)",
      [data.sku, data.descricao, data.total]
    );
  });
}

/**
 * Select data from table latinhas
 * @param {integer} id
 */
export async function selectData(id) {
  openDb();
  return openDb().then((database) => {
    return database.all("SELECT * FROM latinhas").then((res) => res);
  });
}
