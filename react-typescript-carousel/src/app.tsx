import React, { useState, useEffect } from 'react';

const numbers: number[] = [0, 1, 2, 3, 4];

export default function CarouselHook(props: {images: {alt: string, src: string}[]}) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => nextImage(), 3000);
    return () => clearInterval(interval);
  });

  function previousImage() {
    setPhotoIndex(prev => (((prev - 1) + props.images.length) % props.images.length));
  }

  function nextImage() {
    setPhotoIndex(prev => ((prev + 1) % props.images.length));
  }

  function setImage(event: React.SyntheticEvent<HTMLSpanElement>) {
    const index = Number(event.currentTarget.dataset.id);
    setPhotoIndex(index);
  }

  return (
    <>
      <div className="row">
        <div>
          <button>
            <span onClick={previousImage} className="fa-solid fa-chevron-left" data-id="left"></span>
          </button>
        </div>
        <ul className="window">
          {
            props.images.map((image, index) => {
              const listClass = index === photoIndex ? '' : 'hidden';
              return (
                <li key={index} className={listClass}>
                  <img src={image.src}></img>
                </li>
              );
            })
          }
        </ul>
        <div>
          <button>
            <span onClick={nextImage} className="fa-solid fa-chevron-right" data-id="right"></span>
          </button>
        </div>
      </div>
      <div className="row">
        <ul>
          {
            numbers.map((number) => {
              const circleClass = number === photoIndex
                ? 'solid'
                : 'regular';
              return (
                <li key={number} className="dot" onClick={setImage} data-id={number}>
                  <span className={`fa-${circleClass} fa-circle`}></span>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
}
