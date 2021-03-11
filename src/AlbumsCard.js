import React from 'react';
import {useSelector} from 'react-redux';
import {getSongsFromAlbum} from './selectors/selector';
import { Link, NavLink, Route } from 'react-router-dom';
import AlbumSongsSearch from './AlbumSongsSearch';
import Nav from './Nav';

function AlbumsCard({song}){
    console.log("songs: ", song);
    //getting the substrings of the uri to get the album id
    //album id is found at albumId[2]
    var albumId = song.uri.substring(1).split(":");

    return (
        <div id="album-songs-card">
            <div id="albumImage">
            <img src={song.images[0].url}  width="300" alt="albumPic"/>
            <button onClick={() => {
                console.log("clicked");
                <Route path="/tracks">
                    <AlbumSongsSearch album={albumId[2]}/>
                </Route>
            }}>
                {song.name}
            </button>
            {/* <h1>{song.name}</h1> */}
            </div>  
        </div>
    );
}
export default AlbumsCard;