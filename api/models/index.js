const User = require("./Users")
const Favorite = require("./Favorites")

Favorite.belongsToMany(User, { through: 'user_favorites'})
User.belongsToMany(Favorite, { through: 'user_favorites'})

module.exports = { User, Favorite }
