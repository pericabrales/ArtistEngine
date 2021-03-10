import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './index.css';

class Header extends React.Component{
    render(){
        return(

                    <div id="siteTitle">
                        <h1 id="title"> Artist Engine </h1>
                        <h2 id="title-text"> Start Exploring Music... </h2>
                    </div>
        )
        }
    }
    
export default Header;
