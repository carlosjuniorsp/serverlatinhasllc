import { openDb } from "./configDB.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

openDb();

app
  .route("/latinhas/:id?")
  .get((req, res) => {
  })
  .post((req, res) => {
    
  });

app.listen(3001, (req, res) => {
  console.log("O servidor foi iniciado.");
});
