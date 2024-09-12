import { useEffect, useState } from "react";


function CharectersList() {
    const[characters, setcharacters] = useState([]);


    useEffect(() => {
      async function evaluacion(){
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setcharacters(data.results);
        console.log(data)
      }
      evaluacion();
    }, []);


   return (
        <div>
        {
            characters.map((character) => {
              return(
            <div key= {character.id}>
            <h2>{character.name}</h2>
            <h3>{character.status}</h3>
            <h4>{character.gender}</h4>
            <img src={character.image} alt={character.name}/>
            </div>
              );
          })}
          </div>
    );
}

export default CharectersList;