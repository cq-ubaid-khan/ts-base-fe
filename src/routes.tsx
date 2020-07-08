import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as React from 'react';


const routes = () => (
  <Router>
      <Switch>
        <Route exact path="/test" render={() => <h1>test</h1>} />
        <Route exact path="/test2" render={() => <h1>test2</h1>} />
      </Switch>
  </Router>
);

export default routes;
