const { port, hostname } = require("./config/envs.json");
const express = require("express");
const app = express();
const volleyball = require("volleyball");
const router = require("./routers");
const db = require("./db");
const models = require("./models");
const cookieParser = require("cookie-parser");

//MIDDLEWARE PARSEO INFORMACION - DATOS
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//MIDDLEWARE COOKIES
app.use(cookieParser())

//MOSTRAR ARCHIVOS ESTATICAS
app.use(express.static("public"))

//INICIO DE RUTAS
app.use("/api", router);


//LEVANTANDO EL SERVIDOR Y DB
db.sync({ force: false }).then(() => {
  console.log("DB Conected");
  app.listen(port, hostname, () => {
    console.log(`Server on http://${hostname}:${port}`);
  });
});
