import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../common/Cards";

function ResultSearch() {
  const type = "search"
  const [resultMovies, setResultMovies] = useState([]);

  const search = useSelector((state) => state.search)

  useEffect(() => {
    axios
      .get(`/api/search/result/${search}`)
      .then((res) => res.data)
      .then((movies) => setResultMovies(movies.results))
  }, [search]);

  return (
    <div className="movie_series_container">
      <h3>RESULTADOS DE TU BUSQUEDA</h3>
      <div className="movie_series_allCard">
        {resultMovies.map((movie) => (
          <Cards key={movie.id} films={movie} type={type} />
        ))}
      </div>
    </div>
  );
}

export default ResultSearch;
