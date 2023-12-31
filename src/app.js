import {
  saveData,
  selectData,
  selectAllData,
  updateData,
  deleteData,
} from "./Controller/Latinhas.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .route("/latinhas/:id?")
  .get(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    if (req.params.id) {
      var latinhas = await selectData(req.params.id);
    } else {
      var latinhas = await selectAllData();
    }
    res.json(latinhas);
  })
  .post((req, res) => {
    saveData(req.body);
    if (req.body.period_until < req.body.period_of) {
      res.status(201).send({
        title: "error",
        success: false,
        message: "Insira as datas de forma corretas!",
      });
    }
    res.status(200).send({
      title: "Sucesso",
      success: true,
      message: "Os dados foram inserindos com sucesso!",
      data: req.body,
    });
  })
  .put((req, res) => {
    if (!req.params.id) {
      throw "Falta o parâmetro ID na rota!";
    }
    if (req.body.period_until < req.body.period_of) {
      res.status(201).send({
        title: "error",
        success: false,
        message: "Insira as datas de forma corretas!",
      });
    }
    updateData(req.body, req.params.id);
    res.status(200).send({
      title: "Sucesso",
      success: true,
      message: "Os dados foram atualizados com sucesso!",
      data: req.body,
    });
  })
  .delete((req, res) => {
    if (!req.params.id) {
      throw "Falta o parâmetro ID na rota!";
    }
    deleteData(req.params.id);
    res.status(200).send({
      success: true,
      message: "Os dados foram deletados com sucesso!",
    });
  });

app.listen(3001, (req, res) => {
  console.log("O servidor foi iniciado.");
});
