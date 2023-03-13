import React from "react";

type Pokemon = {
  number: string,
  name: string,
  type: string
}

export default function PokemonTable (props: {pokemon: Pokemon[]}) {
  const pokemon = props.pokemon;

  const pokedexRows = pokemon.map(pok => {
    return (
        <tr key={pok.name}>
          <td>{pok.number}</td>
          <td>{pok.name}</td>
          <td>{pok.type}</td>
        </tr>
    )
  })

  return (
    <>
      <table>
        <thead>
            <tr>
              <th colSpan={3}>Pokemon</th>
            </tr>
            <tr>
              <th>
                Number
              </th>
              <th>
                Name
              </th>
              <th>
                Type
              </th>
            </tr>
        </thead>
        <tbody>
          {pokedexRows}
        </tbody>
      </table>
    </>
  )
}
