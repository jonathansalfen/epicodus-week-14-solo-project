import React from 'react';

const iconPath = process.env.PUBLIC_URL + '/assets/images/';


function Home() {
  const beerBlue = {
    width: '3em',
    backgroundColor: '#C3CEDB',
    padding: '1em',
    border: 'black solid 3px'
  };

  return (
    <div>
      <p>Home</p>
      <img style={{width: '3em'}} src={`${iconPath}barley.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-1.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-2.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-3.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-4.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-5.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-6.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-bottle-1.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-bottle-2.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-can.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}beer-keg.svg`} alt="barley" />
      <img style={{width: '3em'}} src={`${iconPath}bottle-opener.svg`} alt="barley" />
      <div>
        <img style={beerBlue} src={`${iconPath}beer-blue.svg`} alt="barley" />
      </div>
    </div>
  );
}

export default Home;
