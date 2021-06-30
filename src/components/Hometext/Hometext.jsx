import React from 'react';

export default function Hometext() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-extrabold border-b-2 text-gray-800 border-gray-800">Welcome to the best website ever... toujours</h1>
        <input
          type="text"
          placeholder="It doesn't work... !"
          className="w-full mt-10 py-4 rounded-md px-2 text-xl focus:outline-none border border-gray-800"
        />
      </div>
    </div>
  );
}
