import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(res => setPokemons(res.data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="home-container">
      <h1>Lista de Pokémons</h1>
      <ul className="pokemon-list">
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

