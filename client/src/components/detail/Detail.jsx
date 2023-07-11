import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.origin?.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};
export default Detail;
