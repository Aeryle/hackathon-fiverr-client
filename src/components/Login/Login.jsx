import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="h-screen w-full flex justify-center items-center z-50">
      <form className=" flex text-white items-center px-8 h-auto rounded-lg flex-col bg-gray-800 border    border-white" onSubmit={handleSubmit()}>
        <div className="text-center my-2 mt-8">
          <h2 className="text-2xl mb-2">Connection</h2>
          <div className="border w-32 mx-auto mb-8"></div>
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
                <a href="/signin">ici</a>
              </span>
            </p>
            <p className="text-xs">
              Identifiants introuvables ? Par <span className="text-red-400">ici</span>
            </p>
          </div>

          <button className="border py-1 w-64 rounded-lg my-2 mb-8 font-bold" type="submit">
            Se connecter
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
