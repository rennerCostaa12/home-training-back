import {
  Association,
  BelongsToGetAssociationMixin,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from "sequelize";

import { CategoriesUserModel } from "../../categories-users/models/CategoriesUserModel";
import { ObjectiveUserModel } from "../../objective-user/models/ObjectiveUserModel";
import { WorkHoursModel } from "../../work-hours/models/WorkHoursModel";

export class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;
  declare categories_id: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare work_hours_id: number;
  declare objective_user_id: number;
  declare category?: NonAttribute<CategoriesUserModel>;
  declare workhours?: NonAttribute<WorkHoursModel>;
  declare objectiveuser?: NonAttribute<ObjectiveUserModel>;

  declare getCategory: BelongsToGetAssociationMixin<CategoriesUserModel>;

  declare static associations: {
    category: Association<UserModel, CategoriesUserModel>;
  };

  public static initialize(sequelize: Sequelize): void {
    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        categories_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        work_hours_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        objective_user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
      },
    );
  }

  public static associate(): void {
    UserModel.belongsTo(CategoriesUserModel, {
      foreignKey: "categories_id",
      as: "category",
    });

    UserModel.belongsTo(WorkHoursModel, {
      foreignKey: "work_hours_id",
      as: "workhours",
    });

    UserModel.belongsTo(ObjectiveUserModel, {
      foreignKey: "objective_user_id",
      as: "objectiveuser",
    });
  }
}
