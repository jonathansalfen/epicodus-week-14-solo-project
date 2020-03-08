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
  constructor(props) {
    super(props);
    this.state = {
      kegList: kegListData
    };
  }

  handleAddNewKegOnTapToKeglist(newKeg) {
    this.setState({kegList: [...this.state.kegList, newKeg]});
  }

    // componentDidMount() {
      //   // if (this.state.keglist === null) {
        //     const kegListWithID = kegListData.map(keg => {
          //       return {name: keg.name,
            //         brand: keg.brand,
            //         type: keg.type,
            //         price: keg.price,
            //         alcoholContent: keg.alcoholContent,
            //         pintsAvailable: keg.pintsAvailable,
            //         tapLocation: keg.tapLocation,
            //         id: v4()}
            //       });
            //       this.setState({kegList: kegListWithID});
            //     // }
            //   }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/employee' render={()=><Employee
            kegList={this.state.kegList}
            onNewKegOnTapAddition={(e) => this.handleAddNewKegOnTapToKeglist(e)}
          />} />
          <Route exact path='/customer' render={()=><Customer kegList={this.state.kegList}/>} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
