import { Sequelize } from 'sequelize';

import { env } from './env';
import { UserModel } from '../modules/users/models/UserModel';

export const sequelize = new Sequelize(
  env.database.name,
  env.database.user,
  env.database.password,
  {
    dialect: 'mysql',
    host: env.database.host,
    port: env.database.port,
    logging: false
  }
);

const models = [UserModel];

export const initializeDatabase = async (): Promise<void> => {
  models.forEach((model) => model.initialize(sequelize));

  await sequelize.authenticate();
  await sequelize.sync();
};
