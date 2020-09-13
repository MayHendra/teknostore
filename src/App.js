import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './page/Home'
import Signup from './page/Signup';
import Signin from './page/Signin';
import Shop from './page/Shop';

function App() {
  return (
    <div className="App antialiased">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/daftar">
          <Signup />
        </Route>
        <Route path="/masuk">
          <Signin />
        </Route>
        <Route path="/belanja">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
