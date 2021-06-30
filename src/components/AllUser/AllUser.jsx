import React from 'react';
import { Link } from 'react-router-dom';

export default function AllUser() {
  return (
    <div>
      <Link to="/users">
        <button className="p-4 border rounded-md bg-gray-800 text-white fixed bottom-0 m-4">All Users</button>
      </Link>
    </div>
  );
}
