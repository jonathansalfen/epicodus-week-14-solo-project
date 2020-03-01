import React from 'react';
import NewKegOnTap from './NewKegOnTap';
import KegsOnTap from './KegsOnTap';
import PropTypes from 'prop-types';

function Employee(props) {
  return(
    <div>
      <p>This is employee</p>
      <NewKegOnTap />
      <KegsOnTap kegList={props.kegList}/>
    </div>
  );
}

export default Employee;
