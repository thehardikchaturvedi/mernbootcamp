import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import {PageTransition} from '@steveeeie/react-page-transition';
import Navbar from './core/Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
          <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
      </Switch>
      </PageTransition>
       );
      }}
    />
    </BrowserRouter>
  );
};
export default Routes;
