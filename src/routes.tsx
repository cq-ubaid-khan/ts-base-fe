import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as React from 'react';
import RegisterComponent from './components/public/AuthComponent/auth/RegisterComponent/RegisterComponent';
import LoginComponent from './components/public/AuthComponent/auth/LoginComponent/LoginComponent';
import LayoutComponent from './components/shared/LayoutComponent/LayoutComponent';
import LogoutComponent from './components/public/AuthComponent/auth/LogoutComponent/LogoutComponent';

const routes = () => (
  <Router>
    <Switch>
      <LayoutComponent>
        <Route exact path="/register" component={RegisterComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/logout" component={LogoutComponent} />
      </LayoutComponent>
    </Switch>
  </Router>

);

export default routes;
