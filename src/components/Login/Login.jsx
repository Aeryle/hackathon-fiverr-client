import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useHistory, Link } from 'react-router-dom';

import { auth } from '../../../API/requests';
import { AUTHENTICATE } from '../../store/ACTIONS';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate } = useMutation(
    ({ email, password }) =>
      auth.login({
        email,
        password,
      }),
    {
      onSuccess: (data) => {
        dispatch({
          type: AUTHENTICATE,
          payload: data,
        });

        history.push('/');
      },
    },
  );

  const onSubmit = (data) => mutate(data);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        className=" flex text-white items-center px-8 h-auto rounded-lg flex-col bg-gray-800 border    border-white"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center my-2 mt-8">
          <h2 className="text-2xl mb-2">Connection</h2>
          <div className="border w-32 mx-auto mb-8" />
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col my-2">
            <input
              className="h-8 w-64 rounded-lg  text-black mx-auto px-2"
              type="email"
              id="email"
              placeholder="Email..."
              {...register('email', { required: true })}
            />
            <p className="text-white text-sm ">{errors.email?.type === 'required' && '*email is required'}</p>
          </div>
          <div className="flex flex-col my-2">
            <input
              className="h-8 w-64 rounded-lg text-black mx-auto px-2"
              type="password"
              id="password"
              placeholder="Mot de passe"
              {...register('password', { required: true })}
            />
            <p className="text-white text-sm ">{errors.password?.type === 'required' && '*Saisir un mot de passe'}</p>
          </div>
          <div className="flex flex-col text-center mt-2 mb-8">
            <p className="text-xs">
              {" Je n'ai pas de compte, je m'en crée un "}
              <span className="text-red-400">
                <Link to="/signin">ici</Link>
              </span>
            </p>
            <p className="text-xs">
              Identifiants introuvables ? Par <span className="text-red-400">ici</span>
            </p>
          </div>

          <button className="border py-1 w-64 rounded-lg my-2 mb-8 font-bold" type="submit">
            Se connecter
          </button>
          <button className="border py-1 w-64 rounded-lg my-2 px-5 mb-2 flex justify-between items-center" type="submit">
            <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0C2.686 0 0 2.6865 0 6C0 9.3135 2.686 12 6 12C9.3135 12 12 9.3135 12 6C12 2.6865 9.3135 0 6 0ZM6.07 9.509C4.136 9.509 2.57 7.939 2.57 6C2.57 4.061 4.136 2.491 6.07 2.491C7.015 2.491 7.805 2.8395 8.411 3.4055L7.424 4.3945V4.3925C7.0565 4.0415 6.5905 3.8615 6.07 3.8615C4.915 3.8615 3.9765 4.8395 3.9765 5.998C3.9765 7.1555 4.915 8.1365 6.07 8.1365C7.118 8.1365 7.831 7.5355 7.978 6.7105H6.07V5.342H9.3625C9.4065 5.577 9.43 5.822 9.43 6.079C9.43 8.084 8.0915 9.509 6.07 9.509Z"
                fill="white"
              />
            </svg>
            <div>
              Continuer avec <span className="font-bold">Google</span>
            </div>
          </button>
          <button className="border py-1 w-64 rounded-lg my-2 mb-8 px-5 flex justify-between items-center text-md" type="submit">
            <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 17.211C0 25.7203 6.16892 32.7961 14.2371 34.231V21.8693H9.96594V17.1155H14.2371V13.3116C14.2371 9.03269 16.9891 6.65649 20.8815 6.65649C22.1144 6.65649 23.4442 6.84619 24.6771 7.03589V11.4103H22.4946C20.406 11.4103 19.9319 12.4558 19.9319 13.7879V17.1155H24.4877L23.7289 21.8693H19.9319V34.231C28 32.7961 34.1689 25.7217 34.1689 17.211C34.1689 7.74475 26.4809 0 17.0845 0C7.68801 0 0 7.74475 0 17.211Z"
                fill="#F4F4F4"
              />
            </svg>
            <div>
              Continuer avec <span className="font-bold">Facebook</span>
            </div>
          </button>
        </div>
      </form>
      <div>
        <button className="text-white ml-5 relative">
          <a href="/">X</a>
        </button>
      </div>
    </div>
  );
}
