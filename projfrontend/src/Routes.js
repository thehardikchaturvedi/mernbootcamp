import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminDashboard from './user/AdminDashBoard';
import {PageTransition} from '@steveeeie/react-page-transition';
import Navbar from './core/Navbar';
import {Provider} from 'react-redux'
import store from './redux/store'
import PrivateRoute from './PrivateRoute'
const Routes = () => {
  return (
    <Provider store={store}>
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
        <PrivateRoute path='/dashboard' exact  component={AdminDashboard}/>
      </Switch>
      </PageTransition>
       );
      }}
    />
    </BrowserRouter>
    </Provider>
  );
};
export default Routes;