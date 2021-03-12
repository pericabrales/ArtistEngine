import React from 'react';
import './AlbumSongs.css';

// import {Route, NavLink, useRouteMatch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import fetch from 'isomorphic-unfetch';
//import {css} from '@emotion/react';

import {getSongsFromAlbum, getToken} from './selectors/selector';
import {getAlbumSongs, albumSongsSuccess, albumSongsError} from './actions/actions';


import AlbumSongsCard from './AlbumSongsCard';
import AlbumSongsSearch from './AlbumSongsSearch';
import Nav from './Nav';

//get the tracks on the album clicked
function AlbumSongs({query}){
    const token = useSelector(getToken);
    console.log("token found using selector: ", token);

    const url = window.location.href.substring(1).split("/");
    console.log("url in album songs: ", url );
    
    query = url[4];

        //history so things can be pushed onto the stack
        const history = useHistory();
        //the var and setter for the query we're going to pass into the API
        const [ curQuery, setCurQuery ] = useState(query || "");
        //repos is what we'll use to render something new to the page
        const [repos, setRepos] = useState([]);

    
    //useEffect is needed to perform an http call
    useEffect(() => {
        //create a closure
        let ignore = false;

        //instance of the built in controller that will allow us to cancel a call (abort)
        const contr = new AbortController;

        //need an await for a fetch call to an api
        //therefore need an async function to fetch the search results
        async function fetchAlbumSongs(){
            //will hold the js object that is returned from the json file
            let jsResponse = {};

            //we use a try catch to call the api, and catch an exception if it happens
            try{
                // hard code the type. This is for album songs so the user is going to give us an album only
                const req = new Request(`https://api.spotify.com/v1/search?q=${query}&type=album`, {
                    headers: new Headers({
                        'Authorization': token[0].token_type + ' ' + token[0].access_token
                    })
                });

                console.log("req: ", req);

               jsResponse = await fetch(req).then(res => {
                    if(res.statusText === "Unauthorized"){
                        window.location.href = './';
                    }
                    return res.json();
                }).then(res => {
                    //to get down to the array that holds the ui, I had to go through a lot of arrays. I suggest a lot of trial and error to see what yours is
                    console.log("res items: ", res.albums.items[0]);
                    return res.albums.items[0];
                }).catch(e => {
                    console.log("error");
                    //dispatch(albumSongsError(e));
                });


                console.log("full api call songs: ", jsResponse);

            }catch(e){
                if(e instanceof DOMException){
                    //show the request has been aported
                    console.log("Search request has been aborted");
                }
                else{
                    console.log("error");
                }
            }

            //we make sure an ignore hasn't happened
            if(!ignore){
                console.log("==repo ui: ", jsResponse.uri);
                //getting the substrings of the uri part
                var albumId = jsResponse.uri.substring(1).split(":");
                console.log("albumId: ", albumId);
                //set our response to the albumId array
                setRepos(albumId || []);
                console.log("==repos: ", repos);
            } 
        }

        //if we have a query, call the function above to search for it
        if(query){
            //call the async function
            fetchAlbumSongs();
        }

        //side effect cleanup function called
        return () => {
            //trigger the signal, which fetch will recognize, and then abort the query
            contr.abort();
            //finally ignore will be set to true so we can ignore this search
            ignore = true;
        }

    }, [query]);


    return(
        <div>
            {/* album id is at the 3rd index of repos (repos[2]) */}
            <AlbumSongsSearch album={repos[2]}/>
        </div>
    );
}


export default AlbumSongs;
