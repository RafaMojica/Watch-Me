import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleCard from "../common/SingleCard";

function SingleType() {
  const { id, type } = useParams();

  const [select, setSelect] = useState({});

  useEffect(() => {
    axios
      .get(`/api/${type}/${id}`)
      .then((res) => {
        console.log(res.data);
        setSelect(res.data)})
      .catch(() =>
        alert("Se ha producido un error al intentar buscar una pelicula")
      );
  }, [id, type]);

  return (
    <div>
      <SingleCard select={select} />
    </div>
  );
}

export default SingleType;
