import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={Users} />
    </Switch>
  </BrowserRouter>
);

export default Routes