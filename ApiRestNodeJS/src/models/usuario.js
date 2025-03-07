import {DataTypes} from "sequelize";
import {sequelize} from "../database/Database.js";
import {producto} from './producto.js'

export const usuario = sequelize.define("users",{

    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement:true,
    },
    nombre:{
type:DataTypes.STRING,
    },
    telefono:{
type:DataTypes.INTEGER,
    }

},{
    timestamp:true
}
);
usuario.hasMany(producto,{
    FOREIGNKEY: "usuarioid",
    sourceKey:"id" 
})
producto.belongsTo(usuario      ,{
    FOREIGNKEY: "id_producto",
    targetId:"id"
})
