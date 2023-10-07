import { saveData, selectData } from "./Controller/Latinhas.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .route("/latinhas/:id?")
  .get(async (req, res) => {
    var latinhas = await selectData();
    res.json(latinhas);
  })
  .post((req, res) => {
    saveData(req.body);
    res.status(200).send({
      success: true,
      mensagem: "Os dados foram inserindos com sucesso!",
      data: req.body,
    });
  });

app.listen(3001, (req, res) => {
  console.log("O servidor foi iniciado.");
});
