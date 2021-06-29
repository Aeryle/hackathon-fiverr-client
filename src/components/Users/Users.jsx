import React from 'react';
import { useQuery } from 'react-query';

import { user } from '../../../API/requests';

export default function Users() {
  const { isLoading, error, data } = useQuery('users', user.getAll);
  console.log(data);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 text-center">
      {data.map((user) => (
        <div key={user.id} className="h-96 mt-2 mx-8 sm:mx-0 bg-gray-900 text-white rounded-xl">
          <p className="mt-4 text-xl">{user.pseudo}</p>
          <p>
            Lives in <span className="font-bold">{user.city}</span>
          </p>
          <p>Job: {user.job}</p>
          <p>Status: {user.status}</p>
        </div>
      ))}
    </div>
  );
}
