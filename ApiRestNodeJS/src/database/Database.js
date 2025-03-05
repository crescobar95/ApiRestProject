import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
'project','postgres','cristian',
{
host: 'localhost',
dialect: 'postgres'
})