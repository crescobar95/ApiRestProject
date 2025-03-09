import app from "./app.js";
import { sequelize } from "./database/Database.js";

const PORT = process.env.PORT || 4000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");

    await sequelize.sync({ alter: true });
    console.log("Base de datos sincronizada.");

    app.listen(PORT, () => {
      console.log(`Servicio corriendo en el puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error en la conexión a la base de datos:", error.message);
  }
}

main();
