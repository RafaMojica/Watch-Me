const express = require("express");
const routerUsers = express.Router();
const { generateToken, validateToken } = require("../auth/token");
const User = require("../models/Users");

//CREACION DE RUTAS ----> /api/user

// Creacion de usuario
routerUsers.post("/register", (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(501).send(error));
});

// Loggin
routerUsers.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);

    user
      .validatePassword(password)
      .then((validate) => {
        if (!validate) return res.sendStatus(401);

        const payload = {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        };
        
        const token = generateToken(payload)
        res.cookie("token", token);
        res.status(200).send(payload)
      })
      .catch((error) => res.status(501).send(error));
  });
});

//persistencia de session
routerUsers.get("/me", (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token)
  if(!user) return res.sendStatus(401)
  res.send(user)
});

// logout
routerUsers.get("/logout", (req, res, next) => {
  res.clearCookie("token")
  res.sendStatus(204)
});


module.exports = routerUsers;
