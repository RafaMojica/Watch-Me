import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../common/Cards";

function Movies() {
  const type = "movies"
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/movies`)
      .then((res) => res.data)
      .then((movies) => setMovies(movies.results))
      .catch(() =>
        alert(`Se ha producido un error al intentar buscar las peliculas`)
      );
  }, []);

  return (
    <div className="movie_series_container">
      <h3>TODAS LAS PELICULAS</h3>
      <div className="movie_series_allCard">
        {movies.map((movie) => (
            <Cards key={movie.id} films={movie} type={type} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
