import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { user } from '../../API/requests';

function OneUser() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(['user', id], user.getOne);
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
    </div>
  );
}

export default OneUser;
