import React from 'react';
import { useQuery } from 'react-query';
import { attachment } from '../../../API/requests';
import { useParams } from 'react-router';

export default function Attachments() {
  //   const [attachments, setAttachments] = useState(null);
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    ['users', id],
    () => attachment.getAll(id),
    //    {onSuccess: (data) => setAttachments(data[0]),}
  );

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

  return <div>HELLO ATTACHMENTS</div>;
}
