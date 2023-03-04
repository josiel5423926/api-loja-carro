export interface Customer {
    id_car?: string,
    name_car?: string,
    brand?: string,
    year_of_manufacture?: number,
    description?: string,
    name?: string,
    email?: string,
    phone?: string,
    created_at?: Date,
    updated?: Date
}

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