import React from 'react';
import { useQuery } from 'react-query';
import { tag } from '../../API/requests';

function Tags() {
  const { isLoading, error, data } = useQuery('tags', tag.getAll);
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
      {data.map((tag) => (
        <p key={tag.id}>
          {tag.id}
          {tag.name}
        </p>
      ))}
    </div>
  );
}

export default Tags;
