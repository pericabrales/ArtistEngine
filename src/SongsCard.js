import React from 'react';
import './index.css';

function SongsCard({song}){
    console.log("songs: ", song);

    return (
        <div id="all-tracks">
            <div id="album-songs-card">  
                <h1 id="song-name"> {song.name}</h1> 
            </div>
        </div>
    );
}
export default SongsCard;