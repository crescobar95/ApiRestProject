import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

export const sequelize = new Sequelize(
  process.env.DB_NAME, // postgres
  process.env.DB_USER, // postgres
  process.env.DB_PASSWORD, // cristian
  {
    host: process.env.DB_HOST, // 'db' desde docker-compose.yml
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false, // Desactiva logs de SQL
  }
);
