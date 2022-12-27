import express from "express";
import { Router } from "express";
//const cors = require("cors");
const app = express();
const route = Router();

//app.use(cors());
//app.use(express.json());


route.get("/", (req, res) => {
  res.send("sucesso!");
});

route.get("/contato", (req, res) => {
  //simulando consulta do banco de dados
  const data = [
    {
      id: 1,
      nome: "Josiel Souza",
      email: "josiel.dj@gmail.com",
      createdAt: "21-11-2022",
    },
    {
      id: 2,
      nome: "Maria Sol MAria",
      email: "mariasol@gmail.com",
      createdAt: "18-11-2022",
    },
    {
      id: 3,
      nome: "Solange Duarte",
      email: "solange@gmail.com",
      createdAt: "05-11-2022",
    },
    {
      id: 4,
      nome: "Solange Duarte",
      email: "solange@gmail.com",
      createdAt: "05-11-2022",
    }
  ];
  res.json({
    //mostrar resultado da consulta
    sucesso: true,
    data,
  });
});
app.use(route);
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server running in ' + port)
})
