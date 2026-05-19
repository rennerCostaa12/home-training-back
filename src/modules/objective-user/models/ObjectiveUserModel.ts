import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from "sequelize";

import { UserModel } from "../../users/models/UserModel";

export class ObjectiveUserModel extends Model<
  InferAttributes<ObjectiveUserModel>,
  InferCreationAttributes<ObjectiveUserModel>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare users?: NonAttribute<UserModel[]>;

  declare getUsers: HasManyGetAssociationsMixin<UserModel>;

  declare static associations: {
    users: Association<ObjectiveUserModel, UserModel>;
  };

  public static initialize(sequelize: Sequelize): void {
    ObjectiveUserModel.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        description: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        tableName: "objective_user",
      },
    );
  }

  public static associate(): void {
    ObjectiveUserModel.hasMany(UserModel, {
      foreignKey: "objective_user_id",
      as: "users",
    });
  }
}
