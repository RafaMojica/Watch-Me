const express = require("express");
const router = express.Router();
const routerMovies = require("./movies");
const routerSeries = require("./series");
const routerUsers = require("./users");
const routerSearch = require("./search");
const routerFavorites = require("./favorites");


//RUTAS ----> /api
router.use("/movies", routerMovies);
router.use("/series", routerSeries);
router.use("/search", routerSearch);
router.use("/user", routerUsers);
router.use("/favorites", routerFavorites);




module.exports = router;
