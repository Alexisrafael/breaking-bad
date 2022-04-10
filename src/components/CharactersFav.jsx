import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCharacterFav } from "../redux/Actions";
import est from "./CharactersFav.module.css"


export default function CharactersFav() {
  const characterFav = useSelector((state)=> state.characterFav);
  const dispatch = useDispatch();

  const handleClick = (e, id) =>{
    e.preventDefault();
    dispatch(deleteCharacterFav(id));
  };

  return (
  <div className={est.colunnas}>
    {
      characterFav && characterFav.map((c)=>{
        return(
          <div key={c.char_id}>
            <h1 >{c.name}</h1>
            <button className={est.myBoton} onClick={(e)=> handleClick(e,c.char_id)}>Eliminar de Favorito</button>
            <img className={est.img} src={c.img} alt={c.name} />
            <p>Nickname: {c.nickname}</p>
            <p>Born: {c.birthday}</p>
            <p>Occupation: {c.occupation}</p>
            <p>Status: {c.status}</p>
          </div>
        )
      })
    }
  </div>
  );
}
