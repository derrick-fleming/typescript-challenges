import React, { useState } from "react";

const App = function(props: {items: string[]}) {
  const [menu, setMenu] = useState(false);

  const overlayClass = menu
    ? 'overlay'
    : 'overlay exit-overlay';

  const menuClass = menu
    ? 'modal-container'
    : 'modal-container sliding';

  function changeMenu() {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <div>
      <div className={overlayClass} onClick={changeMenu}></div>
      <div className={menuClass} onClick={changeMenu}>
        <h2>Choose a Game</h2>
        {
          props.items.map(item => <h3 key={item} onClick={changeMenu}>{item}</h3>)
        }
      </div>
      <i onClick={changeMenu} className="fa-solid fa-bars"></i>
      <div>
        <img src='https://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Mario-icon.png'></img>
      </div>
    </div>
  )

}

export default App;
