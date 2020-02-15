import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path='/' component={About} />
    </Switch>
    <p>App</p>
    </div>
  );
}

export default App;
