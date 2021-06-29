import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { user } from '../../API/requests';

function Users() {
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
    <div className="h-full mx-4">
      {data.map((user) => (
        <p key={user.id}>
          {user.id}
          {user.pseudo}
        </p>
      ))}
      <Link to="/user">
        <p>Click here to see One User</p>
      </Link>
    </div>
  );
}

export default Users;
