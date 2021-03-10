import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Nav from './Nav';

import './index.css';


class Home extends React.Component{
    render(){
        return(
            <div>
                <div id="nav">
                    <div id="siteTitle">
                        <h1 id="title"> Artist Engine </h1>
                        <h2 id="title-text"> Start Exploring Music... </h2>
                    </div>
                <div>
                    <ul id="navhome">
                        <li>
                            <NavLink to='/' id="navStyle" exact activeClassName="active-link">
                                Home
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink to='/songs' id="navStyle" activeClassName="active-link">
                                Songs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/albums' id="navStyle" activeClassName="active-link">
                                Albums
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/artists' id="navStyle" activeClassName="active-link">
                                Artists
                            </NavLink>
                        </li>
                     </ul>  
                </div>
               
            </div>
                
             

            </div>
        )
    }
}

export default Home;