import app from "./app.js"
import {sequelize} from "./database/Database.js";

async function main() {
try {
    await sequelize.authenticate();
    console.log("conexion establecida.");
app.listen(3000);
console.log("servicio ok",3000);
} catch (error){
    console.error("conexion no establecida:", error);
}
}
main();