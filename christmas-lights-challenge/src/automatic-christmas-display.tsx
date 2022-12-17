import React from 'react';

export default function AutomaticChristmasDisplay() {
  return (
  <div className='container'>
    <div className='row'>
      <div className='column-one-seventh padding-x3'>
        <div className='row'>
            <svg className='red red-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
        <div className='column-one-seventh padding-x3'>
          <div className='row'>
            <svg className='yellow yellow-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        </div>
        <div className='column-one-seventh padding-x3'>
          <div className='row'>
            <svg className='orange orange-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
      </div>
        <div className='column-one-seventh padding-x3'>
        <div className='row'>
          <svg className='green green-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
      <div className='column-one-seventh padding-x3'>
        <div className='row'>
          <svg className='red-two red-two-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
      <div className='column-one-seventh padding-x3'>
        <div className='row'>
          <svg className='orange orange-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
      <div className='column-one-seventh padding-x3'>
        <div className='row'>
          <svg className='green green-animation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
    </div>
    <div className='container align-right margin-right'>
      <a href='' className='button'>
        Return Home
      </a>
    </div>
  </div>)
}
