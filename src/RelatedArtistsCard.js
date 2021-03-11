import React from 'react';
import {useSelector} from 'react-redux';
import {getSongsFromAlbum} from './selectors/selector';
import { Link, NavLink, Route } from 'react-router-dom';
import AlbumSongsSearch from './AlbumSongsSearch';
import Nav from './Nav';

import './RelatedArtists.css';

function RelatedArtistsCard({artist}){
    console.log("songs: ", artist);

    return (
        <div id="related-artists-card">
            <div id="artist-image">
                <img src={artist.images[0].url}  width="300" alt="albumPic"/>
                <h1 id="artist-name">{artist.name}</h1>
            </div>  
        </div>
    );
}
export default RelatedArtistsCard;