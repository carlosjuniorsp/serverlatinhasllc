import { openDb } from "../configDB.js";

/**
 * form validation execution
 * @param {object} form
 */
export function validationForm(form) {
  if (!form.sku) {
    throw "O campo SKU não pode ficar vazio";
  } else if (!form.descricao) {
    throw "O campo DESCRIÇÃO não pode ficar vazio";
  } else if (!form.total) {
    throw "O campo TOTAL  não pode ficar vazio";
  }
}

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
 * Select all data from table latinhas
 */
export async function selectAllData() {
  openDb();
  return openDb().then((database) => {
    return database.all("SELECT * FROM latinhas").then((res) => res);
  });
}

/**
 * Search for data by id
 * @param {integer} id
 */
export async function selectData(id) {
  openDb();
  return openDb().then((database) => {
    return database
      .get("SELECT * FROM latinhas WHERE id=?", id)
      .then((res) => res);
  });
}

/**
 * Update for data by id
 * @param {object} data
 * @param {integer} id
 */
export async function updateData(data, id) {
  openDb();
  openDb().then((database) => {
    database.run("UPDATE latinhas SET sku=?, descricao=?, total=? WHERE id=?", [
      data.sku,
      data.descricao,
      data.total,
      id,
    ]);
  });
}
  /**
 * Delete for data by id
 * @param {integer} id
 */
export async function deleteData(id) {
    openDb();
    openDb().then((database) => {
      database.run("DELETE FROM latinhas WHERE id=?", [
        id,
      ]);
    });
}
