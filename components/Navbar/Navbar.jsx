import React from 'react';
import Techbutton from '../Techbutton/Techbutton';

export default function Navbar() {
  return (
    <div className="h-14 w-full bg-black bg-opacity-50 flex justify-around items-center text-white">
      <p>TFD</p>
      <Techbutton />
      <button>Image</button>
      <button>Musique</button>
    </div>
  );
}
