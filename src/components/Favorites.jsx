import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../common/Cards";

function Favorites() {
  const type = "favorites"
  const [favorites, setFavorites] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get(`/api/favorites/lookFavorites/${user.email}`)
    .then((response)=> response.data)
    .then((favorites)=> setFavorites(favorites))
    .catch(()=> alert("Error al cargar favoritos"))
  }, [user.email]);

  return (
    <div className="movie_series_container">
      <h3>TODAS TUS FAVORITOS</h3>
      <div className="movie_series_allCard">
        {favorites?.map((favorite) => (
          <Card key={favorite.id} films={favorite} type={type}/>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
