import React from 'react';
import './style/App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Employee from './components/Employee';
import Customer from './components/Customer';
import Error404 from './components/Error404';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/employee' component={Employee} />
        <Route exact path='/customer' component={Customer} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
