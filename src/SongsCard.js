import React from 'react';

function sleep(ms){
    const date = Date.now();
    let curDate = null;
    do{
        curDate = Date.now();
    }while(curDate - date < ms);
}
function SongsCard({song}){
    console.log("songs: ", song);

    return (
        <div id="artist-songs-card">
            <div id="songImage">
            <img src={song.images[0].url}  width="300" alt="songPic"/>
            <h1 id="song-name"> {song.name}</h1> 
            </div>  
        </div>
    );
}
export default SongsCard;