import React from "react";

const menuItems = ['Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy', 'Super Mario Odyssey'];

const images = [
  'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/78/Super_mario_sunshine.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/76/SuperMarioGalaxy.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg'
]


export default function MarioPage(props: {game: string}) {
  const index = Number(props.game)

  return (
    <>
      <h1>{menuItems[index]}</h1>
      <img src={images[index]} className='game-image' />
    </>
  )
}
