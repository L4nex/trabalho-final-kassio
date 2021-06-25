const express = require("express");

const cors = require("cors");
const usuariosRoute = require("./routes/usuariosRoute");
const veiculosRoute = require('./routes/veiculosRoute');
const app = express();

app.use(express.json());
app.use(cors());
app.use(usuariosRoute);
app.use(veiculosRoute);


app.listen(3333);
