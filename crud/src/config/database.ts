import strict from "node:assert/strict";  
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER_NAME as string, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST_NAME as string,
  dialect: "mysql",
  logging: false,
}); 