// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Domov</Link>
    <Link to="/likes">Všečki</Link>
  </div>
);

export default Navbar;
