import React from 'react';
import axios from 'axios';

export default function Users() {
  const fakeUsers = [
    {
      id: 'fdsfsfè',
      username: 'Aeryle',
      email: 'aeryle@gmail.com',
      city: 'BTZ',
      job: 'Student',
      status: 'ONLINE',
    },
    {
      id: 'dsfjdfdfsbfdsfv v jfds  fsd jfjdsfdfdsfdsfds',
      username: 'Chabelle78',
      email: 'chabelle78@music.com',
      city: 'JSP',
      job: 'Musician',
      status: 'BUSY',
    },
    {
      id: 'dsfjdsbfdsffdfdfdfv v jfds  fsd jfjdsfdfd',
      username: 'rcarondw',
      email: 'sleepfor12Hinarow@gmail.com',
      city: 'His Bed',
      job: 'Bed tester',
      status: 'OFFLINE',
    },
    {
      id: 'dsfjdsbfdsfzfrzefdsqv v jfds  fsd jfjdsfdfd',
      username: 'rcarondw',
      email: 'sleepfor12Hinarow@gmail.com',
      city: 'His Bed',
      job: 'Bed tester',
      status: 'OFFLINE',
    },
    {
      id: 'dsfjdsbfdsfv gfdgfdgfdgfdv jfds  fsd jfjdsfdfd',
      username: 'rcarondw',
      email: 'sleepfor12Hinarow@gmail.com',
      city: 'His Bed',
      job: 'Bed tester',
      status: 'OFFLINE',
    },
    {
      id: 'dsfjdsbfdsfv v jfdhghghghs  fsd jfjdsfdfd',
      username: 'rcarondw',
      email: 'sleepfor12Hinarow@gmail.com',
      city: 'His Bed',
      job: 'Bed tester',
      status: 'OFFLINE',
    },
    {
      id: 'dsfjdsbfdsfv llmlmlmv jfds  fsd jfjdsfdfd',
      username: 'rcarondw',
      email: 'sleepfor12Hinarow@gmail.com',
      city: 'His Bed',
      job: 'Bed tester',
      status: 'OFFLINE',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 text-center">
      {fakeUsers.map((user) => (
        <div key={user.id} className="h-96 mt-2 mx-8 sm:mx-0 bg-gray-900 text-white rounded-xl">
          <p className="mt-4 text-xl">{user.username}</p>
          <p>
            Lives in <span className="font-bold">{user.city}</span>
          </p>
          <p>Job: {user.job}</p>
          <p>Status: {user.status}</p>
        </div>
      ))}
    </div>
  );
}
