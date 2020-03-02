import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <tr key={props.id} id={props.id}>
      <td>{props.name}</td>
      <td>{props.brand}</td>
      <td>{props.type}</td>
      <td>{props.price}</td>
      <td>{props.alcoholContent}</td>
      <td>{props.pintsAvailable}</td>
      <td><button>Pint Sold</button></td>
    </tr>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsAvailable: PropTypes.number.isRequired,
  // id: PropTypes.string.isRequired,
  // key: PropTypes.string.isRequired
};

export default Keg;
