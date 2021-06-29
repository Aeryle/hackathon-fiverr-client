import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';

const allTech = ['Front-End', 'Back-End', 'Photo', 'Design', 'Video', 'SCO', 'Musique'];

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="fixed top-0 left-0 mt-14">
      {!isClicked ? (
        <div className="h-screen w-14 bg-gray-800">
          <button onClick={handleClicked} className="w-full flex justify-start text-white p-2">
            +
          </button>
        </div>
      ) : (
        <div className="h-screen w-1/12 bg-gray-800  text-gray-200">
          <button onClick={setIsClicked} className="border-b border-gray-200 py-2 px-3 w-full flex justify-end">
            X
          </button>
          <ul>
            {allTech.map((tech, index) => {
              return (
                <div key={index} className="border-b border-gray-200 p-2 cursor-pointer flex justify-between">
                  <li>{tech} </li>
                  {isClicked ? <ChevronDownIcon className="w-5" /> : <ChevronRightIcon className="w-5" />}
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
