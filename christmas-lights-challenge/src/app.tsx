import React, { useEffect, useState } from 'react';
import AutomaticChristmasDisplay from './automatic-christmas-display';
import parseRoute from './lib/parse-route';
import CreateDisplay from './create-display';

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

  if (window.location.hash === '#create-display') {
    return <CreateDisplay />
  }

  return (
    <>
      <div className='container'>
        <div className='row space-between'>
          <div className='column-one-half'>
            <a className='button' href='#create-display'>
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
