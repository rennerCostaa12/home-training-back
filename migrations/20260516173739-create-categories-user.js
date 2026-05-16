"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories_users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
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

    await queryInterface.bulkInsert("categories_users", [
      {
        name: "INICIANTE",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "INTERMEDIÁRIO",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "AVANÇADO",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories_users");
  },
};
