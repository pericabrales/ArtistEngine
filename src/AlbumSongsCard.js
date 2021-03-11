import React from 'react';

import {useSelector} from 'react-redux';
import {getSongsFromAlbum} from './selectors/selector';

function sleep(ms){
    const date = Date.now();
    let curDate = null;
    do{
        curDate = Date.now();
    }while(curDate - date < ms);
}

function AlbumSongsCard({song}){

    console.log("songs: ", song);

    return (
        <div id="album-songs-card">
            <h1>{song.name}</h1>
            
        </div>
    );
}

export default AlbumSongsCard;