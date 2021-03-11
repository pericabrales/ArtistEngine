import React from 'react';
import './RelatedArtists.css';

// import {Route, NavLink, useRouteMatch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import fetch from 'isomorphic-unfetch';
//import {css} from '@emotion/react';

import {getSongsFromAlbum, getToken} from './selectors/selector';
import {getAlbumSongs, albumSongsSuccess, albumSongsError} from './actions/actions';


import AlbumsCard from './AlbumsCard';
import Nav from './Nav';
import RelatedArtistsCard from './RelatedArtistsCard';
//get the tracks on the album clicked
function RelatedArtistsSearch({curArtist}){
    const token = useSelector(getToken);
    console.log("token found using selector: ", token);
    console.log("album id: ", curArtist);
        //history so things can be pushed onto the stack
        const history = useHistory();
        //the var and setter for the query we're going to pass into the API
        const [ curQuery, setCurQuery ] = useState(curArtist || "");
        //repos is what we'll use to render something new to the page
        const [repos, setRepos] = useState([]);
        //loadingState will be used to keep track of if the data is still loading
        //need for the progress bar
        const [loadingState, setLoadingState] = useState(false); //start at false until search is pressed
        //need isError to keep track of if there is an error
        //show the error screen
        const [isError, setIsError] = useState(false); //also false at start until error detected
    
    //useEffect is needed to perform an http call
    useEffect(() => {
        //create a closure
        let ignore = false;
        //instance of the built in controller that will allow us to cancel a call (abort)
        const contr = new AbortController;
        //need an await for a fetch call to an api
        //therefore need an async function to fetch the search results
        async function fetchRelatedArtists(){
            //will hold the js object that is returned from the json file
            let jsResponse = {};
            //because the search button has been pressed and we're getting information, set the loading bar to true
            setLoadingState(true);
            //gotta set error to false because it could be left over from a previous error
            setIsError(false);

            //we use a try catch to call the api, and catch an exception if it happens
            try{
                const req = new Request(`https://api.spotify.com/v1/artists/${curArtist}/related-artists`, {
                    headers: new Headers({
                        'Authorization': token[0].token_type + ' ' + token[0].access_token
                    })
                });
               jsResponse = await fetch(req).then(res => {
                   console.log("all of res: ", res);
                    if(res.statusText === "Unauthorized"){
                        window.location.href = './';
                    }
                    return res.json();
                }).then(res => {
                    console.log("res items: ", res.artists);
                    return res.artists;
                }).catch(e => {
                    console.log("error");
                    //dispatch(albumSongsError(e));
                });
                console.log("full api call: ", jsResponse);
            }catch(e){
                if(e instanceof DOMException){
                    //show the request has been aported
                    console.log("Search request has been aborted");
                }
                else{
                    //we have to pull up the error screen
                    setIsError(true);
                }
            }
            //we make sure an ignore hasn't happened
            if(!ignore){
                //set our response to the stuff we got in the json
                setRepos(jsResponse || []);
                //set back to false because we have our stuff
                setLoadingState(false);
                console.log("==repos: ", jsResponse);
            } 
        }
        //if we have a query, call the function above to search for it
        if(curArtist){
            //call the async function
            fetchRelatedArtists();
        }
        //side effect cleanup function called
        return () => {
            //trigger the signal, which fetch will recognize, and then abort the query
            contr.abort();
            //finally ignore will be set to true so we can ignore this search
            ignore = true;
        }
    }, [curArtist]);
    
    console.log("artist: ", )

    return(
        <div id="related-artists-search">
            {/* <Nav/> */}
            {repos.map(i => 
                <RelatedArtistsCard artist={i}/>    
            )}
        </div>
    );
}
// function getSpotifyAlbumSongs(data){
//     newAlbum = data;
// }
export default RelatedArtistsSearch;