import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Nav from './Nav';

import './index.css';


class Home extends React.Component{

    render(){
        return(
            <div>
                <Nav/>
               
            </div>
  
        )
    }
}

export default Home;