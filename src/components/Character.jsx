import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter, getAllCharacters, addCharacterFav } from "../redux/Actions";
import est from "./Character.module.css"

export default function Character() {
  const params = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(getCharacter(params.id));
    dispatch(getAllCharacters());
  }, [dispatch, params.id]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCharacterFav(character));
  };

  return (
    <div className={est.titulo}>
      <h1 >{character.name}</h1>
      <img className={est.img} src={character.img} alt={character.name} />
      <p>Nickname: {character.nickname}</p>
      <p>Born: {character.birthday}</p>
      <p>Occupation: {character.occupation}</p>
      <p>Status: {character.status}</p>
      <button className={est.myBoton} onClick={handleClick}>Agergar a Favorito</button>
    </div>
  );
}
