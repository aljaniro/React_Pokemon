import { createContext, useEffect } from "react";
import React, { useState, useCallback } from "react";
import axios from "axios";
export const pokemonContexto = createContext();

export const Provedo = ({ children }) => {
  const [poke, setpoke] = useState([]);

  const cargar = useCallback(async () => {
    if (poke.length < 800) {
    await axios("https://pokeapi.co/api/v2/pokemon?limit=800&offset=0").then(
      
      (val) => {
       
         
          for (let index = 0; index < val.data.results.length; index++) {
            axios.get(val.data.results[index].url).then((element) => {
             
              if (poke.length <= 800) {
                setpoke((prevArray) => [...prevArray, element.data]);
              }
            });
          }
        
      }
    );
  }}, [poke]);
  
  
  useEffect(() => {
    try {
      cargar();
      
    } catch (error) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <pokemonContexto.Provider value={{ poke, setpoke, cargar }}>
      {children}
    </pokemonContexto.Provider>
  );
};
