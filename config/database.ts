import { Sequelize } from "sequelize";

import { env } from "./env";
import { CategoriesUserModel } from "../src/modules/categories-users/models/CategoriesUserModel";
import { UserModel } from "../src/modules/users/models/UserModel";

export const sequelize = new Sequelize(
  env.database.name,
  env.database.user,
  env.database.password,
  {
    dialect: "mysql",
    host: env.database.host,
    port: env.database.port,
    logging: false,
  },
);

const models = [UserModel, CategoriesUserModel];

export const initializeDatabase = async (): Promise<void> => {
  models.forEach((model) => model.initialize(sequelize));
  models.forEach((model) => {
    if ('associate' in model && typeof model.associate === 'function') {
      model.associate();
    }
  });

  await sequelize.authenticate();
  await sequelize.sync();
};
