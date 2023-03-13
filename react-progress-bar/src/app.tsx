import React, {useState, useEffect} from "react";

export default function App () {
  const [ percent, setPercent ] = useState(0);
  let timerId: any = null;
  let i = 0;
  let width = 0;

  useEffect(() => {
    if (percent > 100) {
      clearInterval(timerId)
    }
  }, [timerId]);

  const handleClick = () => {
    if (i === 0) {
      i = 1;
      timerId = setInterval(() => {
        if (width > 99) {
          width = 100
          clearInterval(timerId);
        } else {
          width++;
          setPercent(width);
          console.log(width);
        }
      }, 10);
    }
  }

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress-container">
        <div className="progress-bar">
          <div className="inside-bar" style={{width: `${percent}%`}}>
          </div>
        </div>
        <p className="bar-text">{percent}%</p>
        <button className="run-btn" onClick={handleClick}>Download</button>
      </div>
    </div>
  )
}
