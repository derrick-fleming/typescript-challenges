import React, {useState} from "react";

const colors = ['yellow', 'red', 'green', 'orange'];
const seven = [0, 1, 2, 3, 4, 5, 6, 7]

export default function CreateDisplay() {
  const lights = seven.map(number => <Lights key={number}/>)
  return (
    <div className='container'>
      <div className='row'>
        {lights}
      </div>
    </div>
  )
}

function Lights() {
  const [color, setColor] = useState('yellow');

  function handleClick() {
    colors.find((bulb, index) => {
      if (bulb === color) {
        const nextColor = (index + 1) % colors.length;
        setColor(colors[nextColor])
      }
    })
  }

  return (
    <div className='column-one-seventh padding-x3'>
      <div className='row'>
        <svg onClick={handleClick} className={color} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
    </div>
  )
}
