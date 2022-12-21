import React, {useState, useEffect} from "react";
import TypingTest from "./typing-test";
import parseRoute from "../lib/parse-route";

const App = () => {
  const [route, setRoute] = useState(parseRoute(window.location.hash))

  useEffect(()=> {
     window.addEventListener('hashchange', ()=> {
      setRoute(parseRoute(window.location.hash))
    })
  })

  if (route.path === 'thrones') {
    return <TypingTest quote='thrones'/>
  }

  if (route.path === 'swanson') {
    return <TypingTest quote='swanson'/>
  }

  return(
    <div className="container">
      <h1 className="text">
        Typing Tutor
      </h1>
      <h4>
        Select a difficulty level
      </h4>
      <a href='#thrones'>
        Game of Thrones Quotes
      </a>
      <a href='#swanson'>
        Ron Swanson Quotes
      </a>
    </div>
  )
}

export default App;
