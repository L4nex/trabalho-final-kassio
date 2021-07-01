const express = require("express");

const cors = require("cors");
const usuariosRoute = require("./routes/usuariosRoute");
const mensalistasRoute = require('./routes/mensalistasRoute');
const rotativosRoute = require('./routes/rotativosRoute');
const veiculosRoute = require('./routes/veiculosRoute');
const app = express();

app.use(express.json());
app.use(cors());
app.use(veiculosRoute);
app.use(usuariosRoute);
app.use(mensalistasRoute);
app.use(rotativosRoute);


app.listen(3333);
