import React, {useState, useEffect} from "react";
import PokemonTable from "./table";

const pokemon = [
  { number: '#0001', name: 'Bulbasaur', type: 'Grass / Poison' },
  { number: '#0004', name: 'Charmander', type: 'Fire' },
  { number: '#0007', name: 'Squirtle', type: 'Water' }]


export default function App () {
  const [ percent, setPercent ] = useState(0);
  const [ load, setLoad ] = useState(true);
  let timerId: any = null;
  let i = 0;
  let width = 0;

  const display = load ? 'hidden' : '';

  const handleClick = () => {
    if (percent < 1) {
      timerId = setInterval(() => {
        if (width === 100) {
          clearInterval(timerId);
          setLoad(false)
        } else {
          width++;
          setPercent(width);
          console.log(width);
        }
      }, 10);
    }
  }

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress-container">
        <div className="progress-bar">
          <div className="inside-bar" style={{width: `${percent}%`}}>
          </div>
        </div>
        <p className="bar-text">{percent}%</p>
        <button className="run-btn" onClick={handleClick}>Download</button>
      </div>
      <div className={display}>
        <PokemonTable pokemon={pokemon} />
      </div>
    </div>
  )
}
