import express from 'express';
import projectsrout from "./Routes/guayas.routes.js";

const app = express ();

app.use(express.json());
 

app.use(projectsrout);

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando correctamente");
  });

export default app;

