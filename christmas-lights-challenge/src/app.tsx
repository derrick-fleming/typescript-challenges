import React, { useEffect, useState } from 'react';
import AutomaticChristmasDisplay from './automatic-christmas-display';
import CreateDisplay from './create-display';
import ChristmasTree from './christmas-tree-display';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/christmas-lights-challenge/dist/index.html' element={<Home />} />
          <Route path='/christmas-lights-challenge/dist/index.html/auto-display' element={<AutomaticChristmasDisplay />} />
          <Route path='/christmas-lights-challenge/dist/index.html/create-display' element={<CreateDisplay />} />
          <Route path='/christmas-lights-challenge/dist/index.html/create-tree' element={<ChristmasTree />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}


function Home () {
  return (
    <div className='container'>
      <div className='row space-between'>
        <div className='column-one-half'>
          <Link className='button' to='/christmas-lights-challenge/dist/index.html/create-display'>
            Create Display
          </Link>
        </div>
        <div className='column-one-half'>
          <Link className='button' to='/christmas-lights-challenge/dist/index.html/auto-display'>
            Auto Display
          </Link>
        </div>
        <div className='column-one-half'>
          <Link className='button' to='/christmas-lights-challenge/dist/index.html/create-tree'>
            Christmas Tree
          </Link>
        </div>
      </div>
    </div>
  )
}
