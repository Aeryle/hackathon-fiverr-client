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
    <div className="flex flex-row-reverse">
      {data?.map((data) => (
        <>
          <p>{data.type}</p>
          <img key={data.id} src={data.url} alt={data.id} width="150" height="100"></img>
        </>
      ))}
    </div>
  );
}
