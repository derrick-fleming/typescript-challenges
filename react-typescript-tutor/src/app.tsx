import React, {useState, useEffect} from "react";
import useKeyPress from "./keypress-hook";

const App = () => {
  const [text, setText]: [string|null, React.Dispatch<React.SetStateAction<string>>] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const phrase = 'grumpy wizards make toxic brew'
  const phraseArray = phrase.split('');

  useEffect(() => {
    if (text === phrase[index]) {
      setIndex(index + 1)
      setText(null)
    }
  }, [text, index])


  const phraseMapped = phraseArray.map((letter, i) => {
    let textClass = '';
    if (index === i) {
      textClass = 'border';
    }
    if ((index === i && text === letter) || (index > i)) {
      textClass = 'text-correct';
    }
    if (index === i && text !== letter && text !== null) {
      textClass = 'text-wrong';
    }
    if (letter === ' ') {
      textClass = `${textClass} white-space`;
    }
    return <span className={textClass} key={i}>{letter}</span>;
  })

  const scoreClass = index === phrase.length ? 'score' : 'hidden'

  useKeyPress(key => {
    setText(key);
  });

  return(
    <div className="container">
      <h1 className="text">
        {phraseMapped}
      </h1>
      <h2 className={scoreClass}>
        {score}
      </h2>
    </div>
  )
}

export default App;
