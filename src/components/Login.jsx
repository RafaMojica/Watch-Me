import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../states/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/login", { email, password })
      .then((response) => response.data)
      .then((user) => {
        dispatch(userLogin(user))
        navigate("/movies");
        alert("Iniciaste sesion con exito");
      })
      .catch(() => alert("Email o contraseña incorrecta"));
  };

  return (
    <div className="login_container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>INICIO DE SESION</h2>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña: </label>
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">INGRESAR</button>
      </form>
    </div>
  );
}

export default Login;
