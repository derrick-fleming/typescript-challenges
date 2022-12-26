import React, { ReactEventHandler, useState } from "react";
import MarioPage from "./new-page";

const App = function(props: {items: string[]}) {
  const [menu, setMenu] = useState(false);
  const [game, setGame] = useState('');

  const background = game === ''
    ? ''
    : 'hidden'

  const gameView = game === ''
    ? 'hidden'
    : 'text-align-center'

  const overlayClass = menu
    ? 'overlay'
    : 'overlay exit-overlay';

  const menuClass = menu
    ? 'modal-container'
    : 'modal-container sliding';

  function changeMenu(e: React.SyntheticEvent) {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  function selectGame(e: React.SyntheticEvent) {
    setMenu(false)
    setGame(e.currentTarget.id)
  }

  return (
    <div>
      <div className={overlayClass} onClick={changeMenu}></div>
      <div className={menuClass} onClick={changeMenu}>
        <h2>Choose a Game</h2>
        {
          props.items.map((item, index) => <h3 key={item} id={index.toString()} onClick={selectGame}>{item}</h3>)
        }
      </div>
      <i onClick={changeMenu} className="fa-solid fa-bars"></i>
      <div className={background}>
        <img className='background' src='https://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Mario-icon.png'></img>
      </div>
      <div className={gameView}>
        <MarioPage game={game} />
      </div>
    </div>
  )

}

export default App;
