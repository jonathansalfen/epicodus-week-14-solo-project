import React from 'react';
import KegsOnTap from './KegsOnTap';
import PropTypes from 'prop-types';

function Customer(props) {
  return(
    <div>
      <p>This is customer</p>
      <KegsOnTap kegList={props.kegList}/>
    </div>
  );
}

Customer.propTypes = {
  kegList: PropTypes.array.isRequired
};

export default Customer;
