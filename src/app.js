import { validationForm, saveData, selectData, selectAllData } from "./Controller/Latinhas.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .route("/latinhas/:id?")
  .get(async (req, res) => {
    if (req.params.id) {
      var latinhas = await selectData(req.params.id);
    }else{
      var latinhas = await selectAllData();
    }
    res.json(latinhas);
  })
  .post((req, res) => {
    validationForm(req.body);
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
