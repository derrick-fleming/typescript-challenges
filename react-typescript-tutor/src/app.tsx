import React, {useState, useEffect} from "react";
import useKeyPress from "./keypress-hook";
import TypingTest from "./typing-test";
import parseRoute from "../lib/parse-route";

const App = () => {
  const [test, setTest] = useState('');
  const [randomQuote, setRandomQuote] = useState(null);
  const [route, setRoute] = useState(parseRoute(window.location.hash))

  useEffect(()=> {
     window.addEventListener('hashchange', ()=> {
      setRoute(parseRoute(window.location.hash))
    })
  })



  function handleEasyClick(){
    setTest('easy test')
  }

  function handleDifficultClick(){
    setTest('difficult test')
  }

  if (test === 'easy test') {
    return <TypingTest quote='thrones'/>
  }

  if (test === 'difficult test') {
    return <TypingTest quote='Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.'/>
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
        Game of Thrones Quotes
      </button>
      <button onClick={handleDifficultClick}>
        Ron Swanson Quotes
      </button>
    </div>
  )
}

export default App;
