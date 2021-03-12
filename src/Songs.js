import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Nav from './Nav';

import './index.css';
import SongSearch from './SongSearch';

function Songs({query}){

        return(
            <div>
                <Nav/>
                <h3 id="page-title">Top Track Gallery</h3>
                {/* this is here for testing purposes. Currently not able to call from the App page and still use correctly*/}
                <SongSearch songs={'246dkjvS1zLTtiykXe5h60'} />
            </div>
  
        )
    
}

export default Songs;