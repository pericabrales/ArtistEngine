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
                <AlbumSongsSearch album={'79mdn7airf7jJw1dhV1PCI'} />
            </div>
  
        )
    
}

export default Albums;