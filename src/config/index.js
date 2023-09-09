import Sequelize from "sequelize";
import "dotenv/config";
const newSequelize=new Sequelize(`postgres://postgres:${process.env.PASSWD}@localhost:5432/testdb`,
{ logging: false }
);
export {newSequelize};