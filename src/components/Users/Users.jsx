import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { user } from '../../../API/requests';
import SearchInput from '../SearchInput';
import { useForm } from 'react-hook-form';

export default function Users() {
  const { register, watch } = useForm();

  const searchInput = watch('search');
  const { isLoading, error, data } = useQuery('users', user.getAll);
  const { id } = useParams();

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
    <div className="grid grid-cols-1 sm:grid-cols-3 text-center ml-48 mr-20 gap-y-16  ">
      <SearchInput register={register} name="search" />
      {data.map((user) => (
        <div key={user.id}>
          <Link to={`/users/:${id}`}>
            <div className=" w-5/6 font-bold mt-2 mx-8 sm:mx-0 bg-gray-800 text-white rounded-md">
              <img src="images/homefiverr.jpg" alt="FiverrBackground" className="w-full rounded-t-md " />
              <p className="mt-4 text-xl">{user.pseudo}</p>
              <p>
                Lives in <span className="font-bold">{user.city}</span>
              </p>
              <p>{user.job}</p>
              <p>{user.status}</p>
              <button className="font-bold border py-1 px-2 rounded-md my-3">Contact </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
