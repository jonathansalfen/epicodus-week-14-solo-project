import React from 'react';

const iconPath = process.env.PUBLIC_URL + '/assets/images/;'


function About() {
  return (
    <div>
      <p>About</p>
      <img src={`${iconPath}barley.svg`} alt="barley" />
    </div>
  );
}

export default About;
