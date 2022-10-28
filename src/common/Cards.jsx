import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cards({ films, type }) {
  const textButton =
    type === "favorites" ? "Eliminar de favoritos" : "Agregar a favoritos";
  const { id, poster_path, title, name } = films;

  const user = useSelector((state) => state.user);

  const handelAddFavorite = () => {
    axios
      .post("/api/favorites/addFavorite", { user, films })
      .then((newFavorite) => newFavorite.data)
      .then(() => alert("Se agrego a favorito con exito!"))
      .catch(() => alert("Inicia sesion para poder agregar a favoritos"));
  };

  // const handelDeleteFavorites = () => {
  //   axios
  //     .get(`/api/favorites/delete/${user.email}/${id}`)
  //     .then((newFavorite) => newFavorite.data)
  //     .then(() => {
  //       alert("Se elimino la pelicula con exito!");
  //     })
  //     .catch(() => alert("Inicia sesion para poder eliminar favoritos"));
  // };

  return (
    <div className="container_card">
      <Link to={`${id}`}>
        <figure className="image">
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt="img_poster"
          />
          <figcaption>{title || name} </figcaption>
        </figure>
      </Link>
      {textButton === "Agregar a favoritos" ? (
        <button onClick={handelAddFavorite}>{textButton}</button>
      ) : (
        <button>{textButton}</button>
      )}
    </div>
  );
}

export default Cards;
