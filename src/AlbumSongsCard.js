import React from 'react';

function AlbumSongsCard({props}){
    return (
        <div id="album-songs-card">
            <h1>{props.track_number}: {props.name}</h1>
        </div>
    );
}

export default AlbumSongsCard;