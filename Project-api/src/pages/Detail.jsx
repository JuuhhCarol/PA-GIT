import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './Detail.css'

function Detail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => setPokemon(res.data))
      .catch(err => console.error(err))
  }, [name])

  if (!pokemon) return <div className="detail-container">Carregando...</div>

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Voltar</Link>
      <h1>{pokemon.name}</h1>
      <img
        className="pokemon-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="info">Altura: {pokemon.height}</p>
      <p className="info">Peso: {pokemon.weight}</p>
      <h3 className="types-title">Tipos:</h3>
      <ul className="types-list">
        {pokemon.types.map(type => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Detail
