import React, { useEffect, useState } from 'react';
import AutomaticChristmasDisplay from './automatic-christmas-display';
import parseRoute from './lib/parse-route';

export default function App() {
  const [route, setRoute] = useState(parseRoute(window.location.hash))

  useEffect(()=>{
    window.addEventListener('hashchange', ()=> {
      setRoute(parseRoute(window.location.hash))
    })
  })

  if (window.location.hash === '#auto-display') {
    return <AutomaticChristmasDisplay />;
  }

  return (
    <>
      <div className='container'>
        <div className='row space-between'>
          <div className='column-one-half'>
            <a className='button' href='#auto-display'>
              Create Display
            </a>
          </div>
          <div className='column-one-half'>
            <a className='button' href='#auto-display'>
              Auto Display
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
