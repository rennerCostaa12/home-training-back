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

export class WorkHoursModel extends Model<
  InferAttributes<WorkHoursModel>,
  InferCreationAttributes<WorkHoursModel>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare users?: NonAttribute<UserModel[]>;

  declare getUsers: HasManyGetAssociationsMixin<UserModel>;

  declare static associations: {
    users: Association<WorkHoursModel, UserModel>;
  };

  public static initialize(sequelize: Sequelize): void {
    WorkHoursModel.init(
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
        tableName: "work_hours",
      },
    );
  }

  public static associate(): void {
    WorkHoursModel.hasMany(UserModel, {
      foreignKey: "work_hours_id",
      as: "users",
    });
  }
}
