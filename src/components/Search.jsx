import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataSearch } from "../states/search";

function Search() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("search")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_box">
        <input
          className="search_input"
          onChange={(e)=> dispatch(dataSearch(e.target.value))}
          type="text"
          placeholder="Buscar peliculas..."
        />
          <button type="submit" className="search_button">
            <FaSearch size={15} />
          </button>
        <br />
      </div>
    </form>
  );
}

export default Search;
