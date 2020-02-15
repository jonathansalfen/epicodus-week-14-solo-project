import React from 'react';
import './style/App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Employee from './components/Employee';
import Customer from './components/Customer';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/employee' component={Employee} />
      <Route exact path='/customer' component={Customer} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
