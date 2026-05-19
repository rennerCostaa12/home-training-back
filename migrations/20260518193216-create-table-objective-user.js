"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("objective_user", {
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

    await queryInterface.bulkInsert("objective_user", [
      {
        title: "Reduzir o sedentarismo",
        description: "Me movimentar mais e ter uma disposição",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Emagrecer",
        description: "Queimar gordura e melhorar o corpo",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Manter saúde",
        description: "Manter o corpo e a mente saudáveis",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("objective_user");
  },
};
