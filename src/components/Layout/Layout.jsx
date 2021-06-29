import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Users from '../Users/Users';
import Login from '../Login/Login';
import SignInForm from '../SignInForm/SignInForm';

export default function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="mt-14 ml-14">
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/users" component={Users} />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signin">
            <SignInForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
