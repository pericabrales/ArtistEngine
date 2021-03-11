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
        <div id="all-tracks">
            <div id="album-songs-card">  
                <h1 id="song-name"> {song.name}</h1> 
            </div>
        </div>
    );
}
export default SongsCard;