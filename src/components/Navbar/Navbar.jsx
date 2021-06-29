import React from 'react';
import { Link } from 'react-router-dom';

// import { UserCircleIcon } from '@heroicons/react/solid';

export default function Navbar() {
  return (
    <div className="w-full h-14 bg-gray-800 border-b border-white fixed top-0 flex justify-between items-center px-3 text-white">
      <Link to="/">
        <p className="font-bold text-2xl">TFD</p>
      </Link>
      <div className="flex">
        <Link to="/login">
          <p>Login</p>
        </Link>
        <p> / </p>
        <Link to="signin">
          <p>Sign in</p>
        </Link>
      </div>
    </div>
  );
}
