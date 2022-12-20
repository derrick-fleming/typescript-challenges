import React, {useState, useEffect} from "react";
import useKeyPress from "./keypress-hook";
import TypingTest from "./typing-test";

const App = () => {
  const [test, setTest] = useState('');


  function handleEasyClick(){
    setTest('easy test')
  }

  if (test === 'easy test') {
    return <TypingTest />
  }

  return(
    <div className="container">
      <h1 className="text">
        Typing Tutor
      </h1>
      <h4>
        Select a difficulty level
      </h4>
      <button onClick={handleEasyClick}>
        Easy
      </button>
      <button>
        Hard
      </button>
    </div>
  )
}

export default App;
