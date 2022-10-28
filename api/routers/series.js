const { API } = require("../config/envs.json");
const express = require("express");
const routerSeries = express.Router();
const axios = require("axios");

//CREACION DE RUTAS Y PEDIDOS API ----> /api/series

//llamo a todas las series
routerSeries.get("/", (req, res, next) => {
  axios(`${API.URL}/tv/popular?api_key=${API.KEY}`)
    .then((films) => res.status(200).send(films.data))
    .catch((error) => res.status(501).send(error));
});

//llamo a una serie por su ID
routerSeries.get("/:id", (req, res, next) => {
  const id = req.params.id;

  axios(`${API.URL}/tv/${id}?api_key=${API.KEY}`)
    .then((film) => res.status(200).send(film.data))
    .catch((error) => res.status(501).send(error));
});

module.exports = routerSeries;