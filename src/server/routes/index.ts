import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { Customer } from "../models/customer";

export const routes = Router();

const customers: Customer[] = [];

routes.get("/", (request, response) => {
  const startTime = new Date().getTime();
  
  if (customers.length === 0) {
    customers.push(
      {
        id_car: "ca1a07d0-dd12-4028-9d5e-71167cb95fa5",
        name_car: "Renault Sandero",
        brand: "Renault",
        year_of_manufacture: 2017,
        description: "Carro hatch",
        name: "Maria Luiza",
        email: "marialuiza@gmail.com",
        phone: "(11) 9 1010-1010",
      },
      {
        id_car: "b7859644-fecd-4774-b8ab-d9c363322939",
        name_car: "Fiat Siena",
        brand: "Fiat",
        year_of_manufacture: 2020,
        description: "Carro sedan",
        name: "José Carlos",
        email: "josecarlos@gmail.com",
        phone: "(11) 9 2233-5010",
      }
    );
  }

  const timeout = 200; 

  const timer = setTimeout(() => {
    response.status(500).json({
      message: "Aguarde um pouco.",
      exceededTimeLimit: true,
    });
  }, timeout);

  response.on("finish", () => {
    clearTimeout(timer);
  });

  response.status(200).json(customers);

  const endTime = new Date().getTime();
  const elapsedTime = endTime - startTime;

  if (elapsedTime > timeout) {
    console.warn(`A resposta levou ${elapsedTime} ms, o que excedeu o tempo limite de ${timeout} ms.`);
  }
});

routes.post("/createCar", (request, response) => {
  const {
    name_car,
    brand,
    year_of_manufacture,
    description,
    name,
    email,
    phone,
  } = request.body;

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

routes.patch("/changeCar/:id_car", (request, response) => {
  const { id_car } = request.params;
  const {
    name_car,
    brand,
    year_of_manufacture,
    description,
    name,
    email,
    phone,
  } = request.body;
  const carIndex = customers.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  const customerToUpdate = customers[carIndex];

  const updatedFields = {
    name_car: name_car ? name_car : customerToUpdate.name_car,
    brand: brand ? brand : customerToUpdate.brand,
    year_of_manufacture: year_of_manufacture
      ? year_of_manufacture
      : customerToUpdate.year_of_manufacture,
    description: description ? description : customerToUpdate.description,
    name: name ? name : customerToUpdate.name,
    email: email ? email : customerToUpdate.email,
    phone: phone ? phone : customerToUpdate.phone,
  };

  const updatedCustomer = Object.assign(customerToUpdate, updatedFields);

  updatedCustomer.updated = new Date();

  customers[carIndex] = updatedCustomer;

  return response.json(updatedCustomer);
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
