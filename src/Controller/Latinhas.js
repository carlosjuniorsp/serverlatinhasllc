import { openDb } from "../configDB.js";

/**
 * form validation execution
 * @param {object} form
 */
export function validationForm(form) {
  if (!form.sku) {
    throw "O campo SKU não pode ficar vazio";
  } else if (!form.total_plan) {
    throw "O campo TOTAL PLAN não pode ficar vazio";
  } else if (!form.total_prod) {
    throw "O campo TOTAL PROD não pode ficar vazio";
  } else if (!form.period_of) {
    throw "O campo PERÍODO INICIAL não pode ficar vazio";
  } else if (!form.period_until) {
    throw "O campo PERÍODO FINAL não pode ficar vazio";
  } else if (!form.status) {
    throw "O campo STATUS  não pode ficar vazio";
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
      "INSERT INTO latinhas (sku, total_plan, total_prod, period_of,period_until, status) VALUES (?,?,?,?,?,?)",
      [
        data.sku,
        data.total_plan,
        data.total_prod,
        data.period_of,
        data.period_until,
        data.status
      ]
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
    database.run(
      "UPDATE latinhas SET sku=?, total_plan=?, total_prod=?, period_of=?, period_until=?, status=? WHERE id=?",
      [
        data.sku,
        data.total_plan,
        data.total_prod,
        data.period_of,
        data.period_until,
        data.status,
        id,
      ]
    );
  });
}
/**
 * Delete for data by id
 * @param {integer} id
 */
export async function deleteData(id) {
  openDb();
  openDb().then((database) => {
    database.run("DELETE FROM latinhas WHERE id=?", [id]);
  });
}
