import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignInForm(): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <form
        className=" flex text-white items-center px-8 h-auto rounded-lg flex-col bg-gray-800 border    border-white"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center my-2 mt-8">
          <h2 className="text-2xl mb-2">Inscription</h2>
          <div className="border w-32 mx-auto"></div>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col my-2 text-sm">
            <input
              className={`h-8 w-64 rounded-lg  text-black mx-auto px-2 border
              ${errors.firstName && 'border-red-600'}
              `}
              placeholder="Prénom..."
              type="text"
              id="firstName"
              {...register('firstName', { required: true })}
            />
            <p className="text-white text-sm ">{errors.firstName && 'Veuillez entrer votre prénom'}</p>
          </div>
          <div className="flex flex-col my-2 text-sm">
            <input
              className={`h-8 w-64 rounded-lg  text-black mx-auto px-2 border
              ${errors.lastName && 'border-red-600'}
              `}
              placeholder="Nom..."
              type="text"
              id="lastName"
              {...register('lastName', { required: true })}
            />
            <p className="text-white text-sm ">{errors.lastName && 'Veuillez entrer votre nom'}</p>
          </div>
          <div className="flex flex-col my-2 text-sm">
            <input
              className={`h-8 w-64 rounded-lg  text-black mx-auto px-2 border
              ${errors.email && 'border-red-600'}
              `}
              placeholder="Email..."
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            <p className="text-white text-sm ">{errors.email && 'Veuillez saisir un email'}</p>
          </div>
          <div className="flex flex-col my-2 text-sm">
            <input
              className={`
              h-8 w-64 rounded-lg text-black mx-auto px-2 border
              ${errors.password && 'border-red-600'}
              `}
              placeholder="Mot de passe..."
              type="password"
              id="password"
              {...register('password', { required: true })}
            />
            <p className="text-white text-sm ">{errors.password && 'Entrez au minimum 6 caractère'}</p>
          </div>
          <div className="flex flex-col my-2 text-sm">
            <input
              className="h-8 w-64 rounded-lg text-black mx-auto px-2"
              placeholder="Confirmation du mot de passe..."
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', { required: 'password' })}
            />
            <p className="text-white text-sm ">{errors.confirmPassword && 'Confirmation invalide'}</p>
          </div>
        </div>
        <div className="flex flex-col text-center mt-2 mb-2">
          <p className="text-xs">
            Déjà un compte ? Connecte toi{' '}
            <span className="text-red-400">
              <a href="/login">ici</a>
            </span>
          </p>
        </div>
        <button className={`border py-1 w-64 rounded-lg my-2 mb-8 font-bold`} type="submit">
          {`S'inscrire`}
        </button>
      </form>
    </div>
  );
}
