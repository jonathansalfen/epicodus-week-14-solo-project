import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import kegList from '../data/kegList';

class KegsOnTap extends React.Component {
  componentDidMount(props) {
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
