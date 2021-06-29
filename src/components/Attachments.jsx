import React from 'react';
import { useQuery } from 'react-query';
import { attachment } from '../../API/requests';

function Attachments() {
  const { isLoading, error, data } = useQuery('attachments', attachment.getAll);
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
      {data.map((attachment) => (
        <p key={attachment.id}>
          {attachment.id}
          {attachment.type}
        </p>
      ))}
    </div>
  );
}

export default Attachments;
