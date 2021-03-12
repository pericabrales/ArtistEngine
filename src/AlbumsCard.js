import React from 'react';
import {useSelector} from 'react-redux';
import {getSongsFromAlbum} from './selectors/selector';
import {useHistory} from 'react-router-dom';
import { Link, NavLink, Route } from 'react-router-dom';
import AlbumSongsSearch from './AlbumSongsSearch';
import Nav from './Nav';

function AlbumsCard({song}){
    console.log("songs: ", song);
    //getting the substrings of the uri to get the album id
    //album id is found at albumId[2]
    var albumId = song.uri.substring(1).split(":");

    const history = useHistory();

    return (
        <div id="album-card">
            <div id="albumImage">
            <img src={song.images[0].url}  width="300" alt="albumPic"/>
            <figcaption><button id="albumButton" onClick={ () => (
                history.push(`/album/album-songs/${albumId[2]}`)
            )}>
            {song.name}
            </button></figcaption>
            </div>  
        </div>
    );
}
export default AlbumsCard;