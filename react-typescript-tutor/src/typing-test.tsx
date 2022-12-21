import React, { useState, useEffect } from "react";
import useKeyPress from "./keypress-hook";

const TypingTest = (props: {quote: string}) => {
  const [text, setText]: [string | null, React.Dispatch<React.SetStateAction<string>>] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const[isLoading, setIsLoading] = useState(true);
  const [phrase, setPhrase] = useState('     ');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (isLoading) {
      const link = props.quote === 'thrones'
        ? 'https://api.gameofthronesquotes.xyz/v1/random'
        : 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

      fetch(link)
        .then(response => response.json())
        .then(result => {
          if (props.quote === 'thrones') {
            setPhrase(result.sentence)
            setAuthor(result.character.name);
          } else {
            setPhrase(result[0])
            setAuthor('Ron Swanson')
          }
        })
        .catch(err => console.error(err));
      setIsLoading(false)
    }

    if (text === phrase[index]) {
      setIndex(index + 1)
      setText(null)
      setScore(score + 1)
    } else if (text !== phrase[index] && text !== null) {
      setScore(score - 1)
    }
  }, [text, index])

    function handleClick() {
      setIsLoading(true);
      setIndex(0);
      setScore(0);
    }

     const phraseMapped = phrase.split('').map((letter, i) => {
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

  const finalScore = index === phrase.length
    ? Math.floor(100 * (score / phrase.length))
    : 0

  return (
    <div className="container">
      <h1 className="text">
        {phraseMapped}
      </h1>
      <h2> -- {author}</h2>
      <div className={scoreClass}>
        <h2>
          Your accuracy is: {finalScore}%
        </h2>
        <button onClick={handleClick}>
          Play Again?
        </button>
      </div>
      <a href="">
        Return Home
      </a>
    </div>
  )
}

export default TypingTest;
