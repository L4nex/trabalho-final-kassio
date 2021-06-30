const express = require("express");

const cors = require("cors");
const usuariosRoute = require("./routes/usuariosRoute");
const mensalistasRoute = require('./routes/mensalistasRoute');
const app = express();

app.use(express.json());
app.use(cors());
app.use(usuariosRoute);
app.use(mensalistasRoute);


app.listen(3333);
