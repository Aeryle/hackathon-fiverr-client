import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const pseudo = useSelector((state) => state.pseudo);

  return (
    <div className="w-full h-14 bg-gray-800 border-b border-white fixed top-0 flex justify-between items-center px-3 text-white">
      <Link to="/">
        <p className="font-bold text-2xl">TFD</p>
      </Link>
      <div className="flex">
        {pseudo ? (
          <p>{pseudo}</p>
        ) : (
          <>
            <Link to="/login">
              <p>Login</p>
            </Link>
            <p> / </p>
            <Link to="signin">
              <p>Sign in</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
