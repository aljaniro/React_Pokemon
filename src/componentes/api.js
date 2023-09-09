import React, { useContext } from "react";
import './api.css'
import { pokemonContexto } from "../provider/apicontest";

function Api() {
  const { poke } = useContext(pokemonContexto);
  

  return (
    
    <div className="container text-center">
      
      {poke.map((val, index) => (
        <div class="card" style={{ width: "320px" }} key={val.id}>
       
          <img src={val.sprites.back_default} class="card-img-top" alt="..." />
          <div class="card-body">
            
            <h5 class="card-title">{val.name}</h5>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Api;
