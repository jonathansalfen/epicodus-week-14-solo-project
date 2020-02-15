import React from 'react';
import kegList from '../data/kegList';
import Keg from './Keg';

function OnTap() {
  return(
    <div>
      <p>This is OnTap</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Price</th>
          <th>Alcohol Content</th>
        </tr>
        {kegList.map((keg, index) =>
          <Keg
            name={keg.name}
            brand={keg.brand}
            type={keg.type}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
          />
        )}
      </table>
    </div>
  );
}

export default OnTap;
