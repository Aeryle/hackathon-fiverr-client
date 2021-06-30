import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { user } from '../../../API/requests';

function OneUser() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(['user', { id }], user.getOne(id));

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
    <div className="w-full h-screen text-white flex justify-center items-center">
      <div className="border rounded-md p-3 flex flex-col  w-2/4 bg-gray-800">
        <div className="flex justify-between">
          <div>
            <p>Pseudo:</p>
            <p>Ville:</p>
            <p>description:</p>
          </div>
          <div>
            <p className="text-xl">{data?.pseudo}</p>
            <p>{data?.city}</p>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
      <p>{data?.description}</p>
      <Attachments />
        <button className="my-3 p-2 rounded-md border hover:bg-green-500">Contacter</button>
      </div>
    </div>
  );
}

export default OneUser;
