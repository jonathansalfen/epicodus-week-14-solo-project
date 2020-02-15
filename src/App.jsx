import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';
import NavBar from './components/NavBar';
import Employee from './components/Employee';
import Customer from './components/Customer';

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/employee' component={Employee} />
      <Route exact path='/customer' component={Customer} />
    </Switch>
    <p>App</p>
    </div>
  );
}

export default App;
