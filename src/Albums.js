import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import Nav from './Nav';

import './index.css';

function Albums({query}){
    

        return(
            <div>
                <Nav/>
               
            </div>
  
        )
    
}

export default Albums;