import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={About} />
      </Switch>
    </div>
  );
}

export default App;
