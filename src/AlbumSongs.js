import React from 'react';

import {Route, NavLink, useRouteMatch, Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import fetch from 'isomorphic-unfetch';
import {css} from '@emotion/react';

/* File created by Peri */

function AlbumSongs({album}){
    //push onto the stack
    const history = useHistory();
    //var and setter for the album we're going to pass into the api
    const [curAlbum, setCurAlbum] = useState(album || "");
    //repos to render the new thing to the page
    const [repos, setRepos] = useState([]);
    //SPACE FOR LOADING STATE IF WE WANT

    //SPACE FOR ERROR IF WE WANT

    //use useEffect to perform an http call to the api
    useEffect(() => {
        //create a closure
        let ignore = false;
    }, [album]);
}
