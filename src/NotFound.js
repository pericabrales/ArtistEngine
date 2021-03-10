import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav'
const NotFound= () => {
  return (
    <React.Fragment>
      <Nav/>
     <h1 align="center">Page not found. <Link to="/search">Search Page</Link></h1> 
    </React.Fragment>
  );
};
export default NotFound;