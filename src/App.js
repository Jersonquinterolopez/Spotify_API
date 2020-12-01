import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './features/Login';
import Success from './features/Login/Success';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
      </Switch>
      <Redirect to="/login" />
    </BrowserRouter>
  );
}

export default App;
