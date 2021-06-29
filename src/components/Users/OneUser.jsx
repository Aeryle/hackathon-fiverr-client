import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { user } from '../../../API/requests';
import Attachments from './Attachments';

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
    <div className="h-full mx-4">
      <h2>HELLO WORLD</h2>
      <div>
        <div className="flex justify-between">
          <div>
            <p>{data?.pseudo}</p>
          </div>
          <p>{data?.city}</p>
        </div>
        <Attachments />
      </div>
      <p>{data?.description}</p>
    </div>
  );
}

export default OneUser;
