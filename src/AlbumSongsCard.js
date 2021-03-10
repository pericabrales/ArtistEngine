import React from 'react';

import {useSelector} from 'react-redux';
import {getSongsFromAlbum} from './selectors/selector';


function AlbumSongsCard(){
    const songList = useSelector(getSongsFromAlbum);
    //songs is the internal array you have to reference to be able to grab all the information on the songs
    console.log("songs we have gotten: ", songList.songs);

    return (
        <div id="album-songs-card">
            {songList.songs.map(s => (
                <h1>{s.name}</h1>
            ))}
            
        </div>
    );
}

export default AlbumSongsCard;