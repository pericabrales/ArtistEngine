import React from 'react';

// import {Route, NavLink, useRouteMatch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import fetch from 'isomorphic-unfetch';
//import {css} from '@emotion/react';

import {getSongsFromAlbum, getToken} from './selectors/selector';
import {getAlbumSongs, albumSongsSuccess, albumSongsError} from './actions/actions';


import AlbumSongsCard from './AlbumSongsCard';
import Nav from './Nav';


//get the tracks on the album clicked
function AlbumSongsSearch({album}){
    //grab the token 
    const token = useSelector(getToken);
    console.log("token found using selector: ", token);

    const dispatch = useDispatch();
    //I made token an array so it wouldn't scream at me, so just use the first place, in case it added something it wasn't supposed to
    const albumSongsGet = getAlbumSongs(token[0].access_token, token[0].token_type, album);
    dispatch(albumSongsGet);
    

    // const songs = useSelector(getSongsFromAlbum);
    // console.log("songs in search: ", songs);


    return(
        <div id="album-songs-search">
            {/* <Nav/> */}
            <AlbumSongsCard />    
        </div>
    );
}

export default AlbumSongsSearch;
