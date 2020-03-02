import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import kegList from '../data/kegList';
import { v4 } from 'uuid';

class KegsOnTap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: null
    };

  }

  componentDidMount(props) {
    const cat = kegList;

    // cat[0].id = v4();
    // console.log({...cat[0], id: v4()});
    const kegListWithID = kegList.map(keg => {
      let ceg = keg;
      ceg[id]: v4();
            return {ceg};
    });
    console.log(kegListWithID);
    if (this.props.keglist === null) {
      this.setState({kegList: kegList});
    }
  }


  render() {

    return(
      <div>
        <p>This is KegsOnTap</p>
        <table>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Price</th>
            <th>Alcohol Content</th>
            <th>Pints Available</th>
          </tr>
          {kegList.map((keg) =>
            <Keg
              name={keg.name}
              brand={keg.brand}
              type={keg.type}
              price={keg.price}
              alcoholContent={keg.alcoholContent}
              pintsAvailable={keg.pintsAvailable}
            />
          )}
        </table>
      </div>
    );
  }
}

KegsOnTap.propTypes = {
  kegList: PropTypes.array.isRequired
};

export default KegsOnTap;
