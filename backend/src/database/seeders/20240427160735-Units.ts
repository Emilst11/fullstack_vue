'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.bulkInsert("Units", [
      {
        name: "Siloam Hospitals TB Simatupang",
        address: "Jl. RA. Kartini No. 8, Cilandak Jakarta Selatan",
        isDelete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Siloam Hospitals Mampang",
        address: "JL. Mampang Prapatan XVI, Kel. Duren Tiga, Kec. Pancoran, Kota Adm. Jakarta Selatan, Prov. DKI Jakarta",
        isDelete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Siloam Hospitals Kebon Jeruk",
        address: "Jl. Raya Pejuangan Kav. 8, Kebon Jeruk Jakarta 11530",
        isDelete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.bulkDelete("Units", {})
  }
};
