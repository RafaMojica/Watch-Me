import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../states/user";
import { AiTwotoneStar } from "react-icons/ai"

function Navbar() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSalir = () => {
    axios
      .get("/api/user/logout")
      .then((res) => res.data)
      .then(() => dispatch(userLogout()))
      .catch(() => alert("No se puedo cerrar la sesion con exito!"));
  };

  return (
    <div className="navbar_container">
      <div className="navbar_menu">
        <ul>
          <li>WATCH ME</li>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="movies">
            <li>Peliculas</li>
          </Link>
          <Link to="series">
            <li>Series</li>
          </Link>
        </ul>
      </div>
      <div className="navbar_menu">
        {user.name ? (
          <ul>
            <Search/>
            <li><span>{`BIENVENIDO ${user.name.toUpperCase()}`}</span></li>
            <Link to="favorites">
            <li>favoritos</li>
            </Link>
            <Link to="/" onClick={handleSalir}>
              <li>Salir</li>
            </Link>
          </ul>
        ) : (
          <ul>
            <Search/>
            <Link to="user/login">
              <li>Ingresar</li>
            </Link>
            <Link to="user/register">
              <li>Registrarse</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
