import React from 'react';

import './AlbumSongs.css';

import {useSelector} from 'react-redux';
import {getSongsFromAlbum} from './selectors/selector';


function AlbumSongsCard({song}){

    console.log("songs: ", song);

    return (
        <div id="album-songs-card">
            <div id="song-num-name">
                <h2 id="track-num">{song.track_number}.</h2>
                <h1 id="track-name">{song.name}</h1>
            </div>
            
        </div>
    );
}

export default AlbumSongsCard;