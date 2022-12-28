

import React from 'react';
import ReactDOM from 'react-dom/client';
import CarouselHook from './app';

const images = [
  {
    alt: 'Alpaca Pokemon: Venasaur',
    src: 'https://i.imgur.com/su47OBA.gif'
  },
  {
    alt: 'Alpaca Pokemon: Kangaskhan',
    src: 'https://64.media.tumblr.com/57a6a63277ad7d84fdd88845b250d6de/tumblr_n9eeqtrpcH1sdqa1xo1_400.png'
  },
  {
    alt: 'Alpaca Pokemon: Porygon',
    src: 'https://64.media.tumblr.com/0cd2e8110c728cc2d5524821e94c1ccf/tumblr_n9iuwlx0A71sdqa1xo3_400.png'
  },
  {
    alt: 'Alpaca Pokemon: Charzard',
    src: 'https://i.imgur.com/k9loW6h.gif'
  },
  {
    alt: 'Alpaca Pokemon: Gyarados',
    src: 'https://64.media.tumblr.com/34d06d75e42d4332dc588f506a57255d/tumblr_n9j0i6co5V1sdqa1xo5_400.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CarouselHook images={images} />);
