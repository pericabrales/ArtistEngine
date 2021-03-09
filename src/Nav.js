import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './index.css';
    

class Nav extends React.Component{
    render(){
        return(
            <div id="nav">
                <h1 id="siteTitle"> Artist Engine</h1>
                <div><ul id="navhome">
                <li><NavLink to='/' id="navStyle" exact activeClassName="active-link">Home</NavLink> </li>
                <li><NavLink to='/songs' id="navStyle" activeClassName="active-link">Songs</NavLink></li>
                <li><NavLink to='/albums' id="navStyle" activeClassName="active-link">Albums</NavLink></li>
                <li><NavLink to='/artists' id="navStyle" activeClassName="active-link">Artists</NavLink></li>
              </ul>  </div>
               
            </div>
        )
    }
}

export default Nav;