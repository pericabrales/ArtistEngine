import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Nav from './Nav';

import './index.css';
import AlbumSearch from './AlbumSearch';

function Albums({query}){

        return(
            <div>
                <Nav/>
                {/* this is here for testing purposes. Currently not able to call from the App page and still use correctly*/}
                <AlbumSearch album={'246dkjvS1zLTtiykXe5h60'} />
            </div>
  
        )
    
}

export default Albums;