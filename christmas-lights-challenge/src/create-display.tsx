import React, {useState, useEffect} from "react";

const colors = ['yellow', 'red', 'green', 'orange'];
const seven = [0, 1, 2, 3, 4, 5, 6, 7]

export default function CreateDisplay() {
  const [random, setRandom] = useState(0);
  const [timerOn, setTimerOn] = useState(false)

  const lights = seven.map(number => <Lights timerOn={timerOn} random={random} key={number}/>)

  function handleStart(){
    if (!timerOn) {
      setTimerOn(true);
      const randomNumber = Math.floor(Math.random() * 10);
      setRandom(randomNumber);
    } else {
      setTimerOn(false);
    }
  }

  const text = timerOn ? 'Stop' : 'Start'

  return (
    <div className='container'>
      <div className='row'>
        {lights}
      </div>
      <div className="row container space-between">
        <button onClick={handleStart} className="button">
          {text}
        </button>
      </div>
    </div>
  )
}

function Lights(props: {key: number, random: number, timerOn: boolean}) {
  const [color, setColor] = useState('yellow');

  function handleClick() {
    colors.find((bulb, index) => {
      if (bulb === color) {
        const nextColor = (index + 1) % colors.length;
        setColor(colors[nextColor])
      }
    })
  }
  let animation = props.timerOn ? {animation: `${color}-color ${props.random}s ease-in-out infinite`} : {}
  if (color === 'red' && props.timerOn) {
    animation = { animation: `${color}-color-1 ${props.random}s ease-in-out infinite` }
  }


  return (
    <div className='column-one-seventh padding-x3'>
      <div className='row'>
        <svg style={animation} onClick={handleClick} className={color} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
    </div>
  )
}
