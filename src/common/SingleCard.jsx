import React from "react";

function SingleCard({ select }) {
  const { id, backdrop_path, poster_path, title, overview, vote_average, name} = select
  
  return (
    <div key={id} className="sinlgeCard_img" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,}}>
      <div className="sinlgeCard_container">
        <div>
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt="img_poster"
            />
          </figure>
        </div>
        <div className="sinlgeCard_description">
          <h2>{title || name}</h2>
          <p>
            <strong>Puntuacion:</strong> {vote_average} / 10
          </p>
          <p>{overview || "Aun no contamos con su descripcion"}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
