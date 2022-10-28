import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Favorite from "./Favorites";
import SingleType from "./SingleType";
import Inicio from "./Inicio";
import Login from "./Login";
import Movies from "./Movies";
import Navbar from "./Navbar";
import Register from "./Register";
import Series from "./Series";
import axios from "axios";
import ResultSearch from "./ResultSearch";
import { useDispatch } from "react-redux";
import { userLogin } from "../states/user";

function App() {
  const dispacht = useDispatch()

  useEffect(() => {
    axios
      .get("/api/user/me")
      .then((res) => res.data)
      .then((user) => dispacht(userLogin(user)))
      .catch(() => console.error("Necesitas loguearte con Whatch Me"));
  }, [dispacht]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="series" element={<Series />}></Route>
        <Route path="favorites" element={<Favorite />}></Route>
        <Route path="search" element={<ResultSearch />}></Route>
        <Route path=":type/:id" element={<SingleType />}></Route>
        <Route path="user/register" element={<Register />}></Route>
        <Route path="user/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
