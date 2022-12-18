import React from "react";

export default function ChristmasTree () {
  return (
    <div className="row">
      <div className="column-one-half">
        <svg className='christmas-tree' viewBox="0 0 100 100">
          <path d="
        m50,5 l-10,10 l20,-2 l-10,-8
        m-7,10 l-8,8 l30,2 l-8,-12
        m-18,10 l-10,14 l40,-4 l-10,-8
        m-26,12 l-6,6 l46,0 l-8,-10
        m-20,10 l0,8 l8,0 l0,-8
        " stroke="#0c0f36">
          </path>
        </svg>
      </div>
      <div className="column-one-half">
        <svg className='christmas-tree' viewBox="0 0 100 100">
          <path d="
        M50,5 l-10,10 l20,0 l-10,-10
        M42,15 l-10,10 l34,0 l-8,-10
        M34,25 l-10,10 l48,0 l-8,-10
        M26,35 l-10,10 l62,0 l-8,-10
        " stroke="#0c0f36">
          </path>
          <path className='trunk' d="
        M44,45 l0,6 l10,0 l0,-6" stroke="#0c0f36"></path>
        </svg>
      </div>
    </div>
  )
}
