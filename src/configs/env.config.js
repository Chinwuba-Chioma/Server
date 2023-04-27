require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUrl: process.env.MONGO_URL,
  jwt: process.env.JWT_SECRET_KEY
};