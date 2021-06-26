import React from 'react';
import { Route } from 'react-router-dom';

import Autorization from './components/Authorization/Autorization';
import Game from './components/Game/Game';

import './App.scss';

function App() {
  return (
    <>
      <Route path="/authorization">
        <Autorization />
      </Route>

      <Route path="/game">
        <Game />
      </Route>
    </>
  );
}

export default App;
