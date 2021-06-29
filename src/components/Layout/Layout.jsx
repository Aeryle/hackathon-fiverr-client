import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import OneUser from '../Users/OneUser';
import Users from '../Users/Users';

export default function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <OneUser />
      <div className="mt-14 ml-14">
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={OneUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
