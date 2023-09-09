import { DataTypes, Sequelize, Model } from "sequelize";
import { newSequelize } from "../config/index.js";

class MainModel extends Model {}

MainModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    user_age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "users",
    sequelize: newSequelize,
    timestamps: true,
  }
);

MainModel.sync({ alter: true });
export default MainModel;