"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("work_hours", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    const now = new Date();

    await queryInterface.bulkInsert("work_hours", [
      {
        title: "Jornada longa",
        description: "8h ou mais por dia",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Jornada padrão",
        description: "6 a 8h por dia",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Jornada moderada",
        description: "4 a 6h por dia",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Jornada curta",
        description: "Menos de 4h por dia",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("work_hours");
  },
};
