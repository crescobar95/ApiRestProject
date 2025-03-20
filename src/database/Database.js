import  Sequelize from 'sequelize';

export const sequelize = new Sequelize("postgres","postgres","cristian",{
host: "localhost",
dialect: "postgres",
});
