import React, { useState, useEffect } from 'react';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  function toggleStart() {
    if (play !== false) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }

  useEffect(() => {

    let interval: ReturnType<typeof setInterval> | null = null;
    if (play) {
      interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [play]);

  function resetTimer(): void {
    if (!play) {
      setCount(0);
    }
  }

  const iconClass = play
    ? 'pause'
    : 'play';

  const border = iconClass === 'play'
    ? 'watch-face'
    : 'change-color'

  return (
    <div className='container'>
      <div className={border} onClick={resetTimer}>
        <h1>{count}</h1>
      </div>
      <div className='container'>
        <button onClick={toggleStart}
          className='playButton'>
          <i className={`fa-solid fa-${iconClass}`}></i>
        </button>
      </div>
    </div>
  );
};

export default App;
