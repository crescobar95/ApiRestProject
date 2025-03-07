import app from "./app.js"
import {sequelize} from "./database/Database.js";


async function main() {
try {
    await sequelize.sync({alter:true})
app.listen(4000);
console.log("servicio ok",4000);
} catch (error){
    console.error("conexion no establecida:", error);
}
}
main(); 