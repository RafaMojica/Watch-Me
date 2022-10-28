const express = require("express");
const routerFavorites = express.Router();
const { Favorite, User } = require("../models");

//CREACION DE RUTAS Y PEDIDOS API ----> /api/favorites

//Guardar un favoritos
routerFavorites.post("/addFavorite", (req, res, next) => {
  const { user, films } = req.body;
  Favorite.create({
    filmsId: films.id,
    backdrop_path: films.backdrop_path,
    poster_path: films.poster_path,
    title: films.title || films.name,
    overview: films.overview,
    vote_average: films.vote_average,
  }).then((newFavorite) => {
    User.findOne({ where: { email: user.email } })
      .then((user) => {
        if (!user) return res.sendStatus(401);
        user.addFavorite(newFavorite);
        res.sendStatus(200);
      })
      .catch((error) => res.status(501).send(error));
  });
});

//Mostrar favoritos de un usuario
routerFavorites.get("/lookFavorites/:email", (req, res, next) => {
  const email = req.params.email;
  User.findOne({
    where: { email },
    include: {
      model: Favorite,
    },
  }).then((user) => res.status(200).send(user.dataValues.favorites));
});

//Mostrar favoritos por su ID
routerFavorites.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Favorite.findOne({ where: { id } })
    .then((movie) => res.status(200).send(movie))
    .catch((error) => res.status(501).send(error));
});

//Eliminar de favoritos
routerFavorites.get("/delete/:email/:id", (req, res, next) => {
  const email = req.params.email;
  const id = req.params.id;
  User.findOne({
    where: { email },
    include: {
      model: Favorite,
    },
  }).then((userAndFavorites) => {
    Favorite.destroy({ where: { id } })
      .then(() => res.sendStatus(202))
      .catch((error) => res.status(501).send(error));
  });
});

module.exports = routerFavorites;
