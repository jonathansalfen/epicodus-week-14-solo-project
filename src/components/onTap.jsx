import React from 'react';
import kegList from '../data/kegList';

function OnTap() {
  return(
    <div>
      <p>This is OnTap</p>
      {kegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          type={keg.type}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
        />
      )}
    </div>
  );
}

export default OnTap;
