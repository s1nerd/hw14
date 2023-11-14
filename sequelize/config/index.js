const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "ngodingasik123",
  host: "localhost",
  port: 5432,
  database: "gozeals",
});

module.exports = sequelize;
