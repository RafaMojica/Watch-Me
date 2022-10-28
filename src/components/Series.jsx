import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../common/Cards";

function Series() {
  const type = "series"
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get("/api/series")
      .then((res) => res.data)
      .then((movies) => setSeries(movies.results))
      .catch(() =>
        alert("Se ha producido un error al intentar buscar las series")
      );
  }, []);

  return (
    <div className="movie_series_container">
      <h3>TODAS LAS SERIES</h3>
      <div className="movie_series_allCard">
          {series.map((serie) => (
            <Cards key={serie.id} films={serie} type={type} />
          ))}
      </div>
    </div>
  );
}

export default Series;
