const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

//CREACION DEL MODELO DE CLASE
class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);


//METODOS DE INSTACIA
User.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

User.prototype.validatePassword = function (password) {
  return this.hash(password, this.salt).then((hash) => hash === this.password);
};


//HOOKS
User.addHook("beforeCreate", (user, options) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.hash(user.password, salt)
  .then((hast) => user.password = hast);
});

module.exports = User;
