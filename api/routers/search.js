const { API } = require("../config/envs.json");
const express = require("express");
const routerSearch = express.Router();
const axios = require("axios");

//CREACION DE RUTAS Y PEDIDOS API ----> /api/search

//mostrar pelicula de su busqueda
routerSearch.get("/result/:search", (req, res, next) => {
  const search = req.params.search;
  axios(`${API.URL}/search/movie?api_key=${API.KEY}&query=${search}`)
    .then((movies) => res.status(200).send(movies.data))
    .catch((error) => res.status(501).send(error));
});

//llamo a una pelicula por su ID de la busqueda
routerSearch.get("/:id", (req, res, next) => {
  const id = req.params.id;

  axios(`${API.URL}/movie/${id}?api_key=${API.KEY}`)
    .then((movies) => res.status(200).send(movies.data))
    .catch((error) => res.status(501).send(error));
});



module.exports = routerSearch;
