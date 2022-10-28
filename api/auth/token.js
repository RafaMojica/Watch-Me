const { AUTH } = require("../config/envs.json");
const jwt = require("jsonwebtoken");

const generateToken = function (payload) {
  const token = jwt.sign({user: payload}, AUTH.SECRET, { expiresIn: "1d" });
  return token;
};

const validateToken = function (token) {
  const payload = jwt.verify(token, AUTH.SECRET);
  return payload;
};

module.exports = { generateToken, validateToken };
