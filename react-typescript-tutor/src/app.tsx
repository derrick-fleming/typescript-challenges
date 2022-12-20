import React, {useState, useEffect} from "react";
import useKeyPress from "./keypress-hook";
import TypingTest from "./typing-test";

const App = () => {
  const [test, setTest] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [randomQuote, setRandomQuote] = useState(null);

  /*useEffect(()=> {
    if (isLoading) {
      fetch('https://zenquotes.io/api/quotes')
      .then(response => response.json())
      .then(result => {
        setRandomQuote(result)
      })
      .catch(err => console.error(err));

      setIsLoading(false)
    }
  })
  */


  function handleEasyClick(){
    setTest('easy test')
  }

  function handleDifficultClick(){
    setTest('difficult test')
  }

  if (test === 'easy test') {
    return <TypingTest quote='grumpy wizards make toxic brew'/>
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
        Easy
      </button>
      <button onClick={handleDifficultClick}>
        Hard
      </button>
    </div>
  )
}

export default App;
