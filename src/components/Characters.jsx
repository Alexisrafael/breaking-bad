import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../redux/Actions";
import est from './Characters.module.css'

export default function Characters() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div className={est.border}>
      <h1 className={est.titulo}>BREAKING BAD</h1>
      <h2 className={est.titulo}>Personajes:</h2>

      <div className={est.colunnas}>
        {allCharacters.length &&
          allCharacters.map((c) => {
            return (
              <div key={c.char_id}>
                <Link to={`/characters/${c.char_id}`}>
                  <h3>{c.name}</h3>
                </Link>
                <Link to={`/characters/${c.char_id}`}>
                  <img className={est.img} src={c.img}/>
                </Link>
                
              </div>
            );
          })}
      </div>
    </div>
  );
}
