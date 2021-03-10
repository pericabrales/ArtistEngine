import React from 'react';

import {Route, NavLink, useRouteMatch, Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import fetch from 'isomorphic-unfetch';
import {css} from '@emotion/react';

//get the tracks on the album clicked
function AlbumSongsSearch({album}){
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

        //instance of controller that lets us cancel a call
        const controller = new AbortController;

        //fetch call for the api results
        async function fetchAlbumSongs(){
            //hold json object we're gonna get back
            let callResponse = {};

            //try catch for api call in case an exception happens
            try{
                //if i need the client key ill put it here
                
                //const that holds the call to the api
                const apiResp = await fetch(`https://api.spotify.com/v1/albums/${album}/tracks`,
                {signal: controller.signal});

                console.log("Full api call: ", apiResp);

                //parse the json we got
                callResponse = await apiResp.json();
            }catch(e){
                if(e instanceof DOMException){
                    //show the request has been aported
                    console.log("Search request has been aborted");
                }
                else{
                    //we have to pull up the error screen
                    //setIsError(true);
                    console.log("pull up error screen");
                }
            }

            //making sure we haven't had an ignore happen
            if(!ignore){
                //set our response to the stuff we got in the json
                setRepos(callResponse.items || []);
                console.log("==repos: ", callResponse.items);
            }
        }

        //If we were given an album number (which we should have, this is just a fail safe)
        if(album){
            //call the async function
            fetchAlbumSongs();
        }

        //clean up function called
        return () => {
            controller.abort();
            ignore = true;
        }

    }, [album]);

    return(
        <div id="album-songs-search">
            {/* {repos.map(i => 
                <AlbumSongsCard props={i} />    
            )} */}
        </div>
    );
}

export default AlbumSongsSearch;
