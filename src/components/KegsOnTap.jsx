import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function KegsOnTap(props) {
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
      {props.kegList.map((keg) =>
        <Keg
        name={keg.name}
        brand={keg.brand}
        type={keg.type}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pintsAvailable={keg.pintsAvailable}
        // id={keg.id}
        // key={keg.id}
        />
      )}
    </table>
  </div>
  );

}

  KegsOnTap.propTypes = {
    kegList: PropTypes.array.isRequired
  };

  export default KegsOnTap;
