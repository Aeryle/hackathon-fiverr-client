import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Users from '../Users/Users';

export default function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="mt-14 ml-14">
        <Switch>
          <Route exact path="/">
            <div>Hello world</div>
          </Route>
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
