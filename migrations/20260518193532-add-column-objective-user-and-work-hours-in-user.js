"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "work_hours_id", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "work_hours",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("users", "objective_user_id", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "objective_user",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "work_hours_id");
    await queryInterface.removeColumn("users", "objective_user_id");
  },
};
