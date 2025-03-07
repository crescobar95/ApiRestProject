import {DataTypes} from "sequelize"
import {sequelize} from "../database/Database.js"


export const producto = sequelize.define("Productos",{

id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
    },
    nombre_producto:{
    type: DataTypes.STRING
    },
    valor:{
    type: DataTypes.INTEGER,

    },
    cantidad:{
    type:DataTypes.INTEGER,

    },
    

},{
    timestamps:false,
});

