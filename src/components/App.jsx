import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Customer from './Customer';
import Employee from './Employee';
import Error404 from './Error404';
import Footer from './Footer';
import Home from './Home.jsx';
import Header from './Header';

import kegListData from '../data/kegList';
import '../style/App.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/employee' render={()=><Employee />} />
          <Route exact path='/customer' render={()=><Customer />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
