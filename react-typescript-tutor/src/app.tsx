import React, {useState} from "react";
import useKeyPress from "./keypress-hook";

const App = () => {
  const [text, setText] = useState('grumpy wizards make toxic brew');
  const phraseArray = text.split('');

  phraseArray.forEach((letter) => {
    if (letter === '') {
      return <span className="white-space"> </span>
    }
    <span>{letter}</span>
  })

  useKeyPress(key => {
    console.log(key)
  });

  return(
    <div className="container">
      <h1 className="text">
        {phraseArray}
      </h1>
    </div>
  )
}

export default App;
