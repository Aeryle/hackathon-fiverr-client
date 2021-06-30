import React from 'react';
import { useQuery } from 'react-query';
import { attachment } from '../../../API/requests';
import { useParams } from 'react-router';

export default function Attachments() {
  const { userId } = useParams();

  const { isLoading, error, data } = useQuery(['attachments', userId], attachment.getAll(userId));
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
    <div className="w-full h-full overflow-y-auto">
      {data?.map((data) => (
        <div key={data.id}>
          <img src={data.url} alt={data.id} className="w-full h-96"></img>
        </div>
      ))}
    </div>
  );
}
