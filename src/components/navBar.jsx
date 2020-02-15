import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return(
    <div>
      <p>This is a navbar</p>
      <Link to="/">Home</Link> | <Link to="/employee">Sample Employee Page</Link> | <Link to="/customer">Sample Customer Page</Link>
    </div>
  );
}

export default NavBar;
