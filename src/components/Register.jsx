import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("/api/user/register", { name, lastname, email, password })
    .then((response)=> response.data)
    .then(()=> {
      navigate("/user/login")
      alert("Felicitaciones!! registro exitoso")
    })
    .catch(() => alert("Registro incorrecto, intente nuevaente"))
  };

  return (
    <div className="register_container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>CREAR CUENTA</h2>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          placeholder="Nombre"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="lastname">Apellido: </label>
        <input
          type="text"
          id="lastname"
          placeholder="Apellido"
          required
          onChange={(e) => setLastname(e.target.value)}
        />
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
        <button type="submit">REGISTRARSE</button>
      </form>
    </div>
  );
}

export default Register;
