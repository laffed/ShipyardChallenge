import React from 'react';
import {Home, User, NotFound} from '@pages';
import {Route, Switch} from 'react-router-dom';

export default function Routes() {

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/user/:userId' component={User} />
      <Route exact path='/404' component={NotFound} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}