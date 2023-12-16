import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [pocemons, setPocemons] = useState([]);

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
  const pocemon = async() => {
    try{
      const response = await axios.get(apiUrl);
      const data = response.data.results;
      const pokemons = Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
      }))
      setPocemons(pokemons);
    }catch (error) {
        console.error('Error fetching data:', error);
      }
  }
  useEffect(() => {
    pocemon();
  },[])
  console.log(pocemons)
  return (
    <div className="App">
      
    <ul>
      {pocemons.map((pokemon) => (
        <li key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img alt='img' src={pokemon.url} />
          {console.log(pokemon.url)}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
