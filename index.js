const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("sucesso!");
});

app.get("/contato", (req, res) => {
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
  ];
  res.json({
    //mostrar resultado da consulta
    sucesso: true,
    data,
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server booted on port 8080, rota http://localhost:8080/contato");
});