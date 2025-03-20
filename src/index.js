import app from "./app.js"
import {sequelize} from "./database/Database.js";


async function main (){
  try{
    await sequelize.sync({alter: true});
  console.log("conexion establecida")
  app.listen(4000)
  console.log("servidor conectado",4000);

  }catch (error){
    console.log("unable to connect to the database",error); 

  }
}

main ();
