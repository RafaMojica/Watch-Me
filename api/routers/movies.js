const { API } = require("../config/envs.json");
const express = require("express");
const routerMovies = express.Router();
const axios = require("axios");

//CREACION DE RUTAS Y PEDIDOS API ----> /api/movies

//muestro a todas las peliculas
routerMovies.get("/", (req, res, next) => {
  axios(`${API.URL}/movie/popular?api_key=${API.KEY}`)
    .then((movies) => res.status(200).send(movies.data))
    .catch((error) => res.status(501).send(error));
});

//muestro a una pelicula por su ID
routerMovies.get("/:id", (req, res, next) => {
  const id = req.params.id;

  axios(`${API.URL}/movie/${id}?api_key=${API.KEY}`)
    .then((movies) => res.status(200).send(movies.data))
    .catch((error) => res.status(501).send(error));
});

module.exports = routerMovies;

