import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const allTech = ['Front-End', 'Back-End', 'Photo', 'Design', 'Video', 'SCO', 'Musique'];

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className=" mt-14">
      {!isClicked ? (
        <div className="h-screen w-14 bg-gray-800 flex">
          <button onClick={handleClicked} className="w-full flex justify-center items-start text-white p-2">
            <MenuIcon className="w-8" />
          </button>
        </div>
      ) : (
        <div className="h-screen w-1/12 bg-gray-800  text-gray-200">
          <button onClick={handleClicked} className="border-b border-gray-200 py-2 px-3 w-full flex justify-end">
            <XIcon className="W-5 h-5" />
          </button>
          <ul>
            {allTech.map((tech, index) => {
              return (
                <div key={index} className="border-b border-gray-200 p-2 cursor-pointer flex justify-between">
                  <li>{tech} </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
