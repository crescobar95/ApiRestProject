import express from 'express';
import projectsrout from "./Routes/guayas.routes.js";

const app = express ();

//middleswares
app.use(express.json());

app.use(projectsrout);

export default app;

