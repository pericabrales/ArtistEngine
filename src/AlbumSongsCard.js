import React from 'react';

import './AlbumSongs.css';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import fetch from 'isomorphic-unfetch';
import {getSongsFromAlbum} from './selectors/selector';

import {getToken} from './selectors/selector';


function AlbumSongsCard({song}){

    console.log("songs: ", song);

    //here I'm getting the url, splitting it by the "/"
    const url = window.location.href.substring(1).split("/");
    console.log("url in album songs: ", url );
    //in console, it says the id is at the 5th index, so I grab from there
    var albumID = url[4];
    console.log("album id: ", albumID);


    return (
        <div id="songs-album-card">
            <div id="song-num-name">
                <h2 id="track-num">{song.track_number}.</h2>
                <h1 id="track-name">{song.name}</h1>
            </div>
            
        </div>
    );
}

export default AlbumSongsCard;