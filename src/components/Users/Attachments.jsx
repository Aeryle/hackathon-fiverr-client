import React from 'react';
import { useQuery } from 'react-query';
import { attachment } from '../../../API/requests';
import { useParams } from 'react-router';

export default function Attachments() {
  const { userId } = useParams();

  const { isLoading, error, data } = useQuery(['user', userId], attachment.getAll(userId));
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
    <div className="text-center">
      {data?.map((data) => (
        <p key={data.id}>{data.type}</p>
      ))}
    </div>
  );
}
