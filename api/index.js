import express from "express";
import { Router } from "express";
import cors from 'cors';
const app = express();
const route = Router();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

/* route.get("/", (req, res) => {
  res.send("sucesso!");
}); */

route.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      nome: "José Maria da Silva",
      email: "jose@gmail.com",
      createdAt: "02-03-2023",
    },
    {
      id: 2,
      nome: "Maria Solange",
      email: "mariasol@gmail.com",
      createdAt: "01-02-2023",
    },
    {
      id: 3,
      nome: "Caio Duarte",
      email: "caio@gmail.com",
      createdAt: "05-11-2022",
    },
    {
      id: 4,
      nome: "Bernardo de Jesus",
      email: "bernardo@gmail.com",
      createdAt: "06-08-2022",
    },
    {
      id: 5,
      nome: "Josiel Souza",
      email: "josielsouza.dj@gmail.com",
      createdAt: "05-11-2022",
    },
  ];
  res.json({
    sucesso: true,
    data,
  });
});
app.use(route);
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("Server running in " + port);
});
