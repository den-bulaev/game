import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Autorization from './components/Authorization/Autorization';
import Game from './components/Game/Game';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route path="/game">
        <Game />
      </Route>

      <Route path="/" exact>
        <Autorization />
      </Route>

      <p>page not found</p>
    </Switch>
  );
}

export default App;
