import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './index.css';
import Header from './Header'

class Nav extends React.Component{
    render(){
        return(
            <div id="nav">
                   <Header/>
                <div>
                    <ul id="navhome">
                        <li>
                            <NavLink to='/search' id="navStyle" exact activeClassName="active-link">
                         
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink to='/songs' id="navStyle" activeClassName="active-link">
                             
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/albums' id="navStyle" activeClassName="active-link">
                           
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/artists' id="navStyle" activeClassName="active-link">
                        
                            </NavLink>
                        </li>
                     </ul>  
                </div>
                <hr id="bottomHr"></hr>
                </div>
        )
    }
}

export default Nav;