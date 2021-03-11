import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Nav from './Nav';

import './index.css';
import AlbumSongsSearch from './AlbumSongsSearch';

function Albums({query}){

        return(
            <div>
                <Nav/>
                {/* this is here for testing purposes. Currently not able to call from the App page and still use correctly*/}
                <AlbumSongsSearch album={'3PYk8e7eo2t5CA1Y3AvhaG'} />
            </div>
  
        )
    
}

export default Albums;