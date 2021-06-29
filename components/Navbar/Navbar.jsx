import React from 'react';

import { UserCircleIcon } from '@heroicons/react/solid';

export default function Navbar() {
  return (
    <div className="w-full h-14 bg-gray-800 border-b border-white fixed top-0 flex justify-between items-center px-5">
      <p className="text-2xl text-white font-bold">TFD</p>
      <UserCircleIcon className="text-gray-200 w-7" />
    </div>
  );
}
