import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Nav from './Nav';

import './index.css';
import RelatedArtistsSearch from './RelatedArtistsSearch';

function RelatedArtists({query}){

        return(
            <div>
                <Nav/>
                {/* this is here for testing purposes. Currently not able to call from the App page and still use correctly*/}
                <RelatedArtistsSearch curArtist={'246dkjvS1zLTtiykXe5h60'} />
            </div>
  
        )
    
}

export default RelatedArtists;