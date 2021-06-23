const express = require("express");

const cors = require("cors");
const usuariosRoute = require("./route/usuariosRoute");
const app = express();

app.use(express.json());
app.use(usuariosRoute);
app.use(cors());

app.listen(3333);

console.log("tasadasd");
