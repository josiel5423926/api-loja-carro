
import { Router } from 'express';
import { v4 as uuidv4 } from "uuid"


import { Customer } from "../models/customer"

export const routes = Router();


const customers: Customer[] = [];

routes.get("/fetchAll", (request, response) => {
  return response.status(200).json(customers);
});


routes.get("/", (request, response) => {
 
const data = [
  {
      id_car:1,
      name_car: "Fiat Uno",
  brand: "Fiat",
  year_of_manufacture: "2015",
  description: "Carro de passeio",
  name: "Maria Arruda do Santos",
  email: "maria@gmail.com",
  phone: "(11) 9 5555-5555"
  },
  {
      id_car:2,
      name_car: "Volkswagen Gol",
  brand: "Volkswagen",
  year_of_manufacture: "2020",
  description: "Carro popular",
  name: "João da Silva",
  email: "joao@gmail.com",
  phone: "(11) 9 6666-6666"
  },
  {
      id_car:3,
      name_car: "Ford Ka",
      brand: "Ford",
      year_of_manufacture: "2012",
      description: "Carro compacto",
      name: "Pedro Henrique",
      email: "pedro@gmail.com",
      phone: "(11) 9 7777-7777"
  },
  {
      id_car:4,
      name_car: "Chevrolet Onix",
      brand: "Chevrolet",
      year_of_manufacture: "2018",
      description: "Carro hatch",
      name: "Ana Beatriz",
      email: "ana@gmail.com",
      phone: "(11) 9 8888-8888"
  },
  {
      id_car:5,
      name_car: "Renault Sandero",
      brand: "Renault",
      year_of_manufacture: "2017",
      description: "Carro hatch",
      name: "Maria Luiza",
      email: "marialuiza@gmail.com",
      phone: "(11) 9 1010-1010"
  },
];
  //return response.status(200).json(customers);
  response.json({
    sucesso: true,
    data,
  });
});
//app.use(route);

routes.post("/createCar", (request, response) => {
  const { name_car, brand, year_of_manufacture, description, name, email, phone } = request.body;

  const newCustomer: Customer = {
    id_car: uuidv4(),
    name_car,
    brand,
    year_of_manufacture,
    description,
    name,
    email,
    phone,
    created_at: new Date(),
  };

  customers.push(newCustomer);

  return response.status(201).json(newCustomer);
});

routes.put("/changeCar/:id_car", (request, response) => {
  const { id_car } = request.params;
  const { name_car, brand, year_of_manufacture, description, name, email, phone } = request.body;
  const carIndex = customers.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  const newCustomer: Customer = {
    id_car,
    name_car,
    brand,
    year_of_manufacture,
    description,
    name,
    email,
    phone,
    updated: new Date(),
  };

  customers[carIndex] = newCustomer;

  return response.json(newCustomer);
});

routes.delete("/deleteCar/:id_car", (request, response) => {
  const { id_car } = request.params;

  const carIndex = customers.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  customers.splice(carIndex, 1);

  return response.status(204).json([]);
});

