import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize';

import { UserModel } from '../../users/models/UserModel';

export class CategoriesUserModel extends Model<
  InferAttributes<CategoriesUserModel>,
  InferCreationAttributes<CategoriesUserModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare users?: NonAttribute<UserModel[]>;

  declare getUsers: HasManyGetAssociationsMixin<UserModel>;

  declare static associations: {
    users: Association<CategoriesUserModel, UserModel>;
  };

  public static initialize(sequelize: Sequelize): void {
    CategoriesUserModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'categories_users'
      }
    );
  }

  public static associate(): void {
    CategoriesUserModel.hasMany(UserModel, {
      foreignKey: 'categories_id',
      as: 'users'
    });
  }
}
