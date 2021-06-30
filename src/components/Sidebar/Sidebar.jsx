import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { tag } from '../../../API/requests';
import { useQuery } from 'react-query';

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);
  const { isLoading, error, data } = useQuery('tags', tag.getAll(10));

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-white">
        An error occurred: {error.message} {error.code}
      </p>
    );
  }

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="h-full w-1/4 fixed z-0">
      {!isClicked ? (
        <div className="h-screen w-14 bg-gray-800">
          <button onClick={handleClicked} className="w-full flex justify-center items-center text-center text-white p-2">
            <MenuIcon />
          </button>
        </div>
      ) : (
        <div className="h-screen w-48 bg-gray-800  text-gray-200">
          <button onClick={handleClicked} className="border-b border-gray-200 py-2 px-3 w-full flex justify-end">
            <XIcon className="w-10" />
          </button>
          <ul>
            {data?.map((data) => {
              return (
                <div key={data.id} className="border-b border-gray-200 p-2 cursor-pointer flex justify-between">
                  <li>#{data.name} </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
