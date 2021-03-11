import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getToken} from './selectors/selector';

import Nav from './Nav';

import './index.css';

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQCHs6YJbLSFNhrDxYILIDcjXUVzCPGeWtoEkrI9rUthe0GqM8lyOEguzXPr3kxtnXYeKcaerkpcZBLEifQ73irLN6YLgMoDHSno2F6IRgLwN-pqdvBzktFWVYjD5iBim12twgoa0d_wHCk');

spotifyApi.getArtistAlbums('246dkjvS1zLTtiykXe5h60', function (err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });

  spotifyApi
  .getArtistAlbums('246dkjvS1zLTtiykXe5h60', { limit: 10 })
  .then(function (data) {
    return data.items.map(function (a) {
      return a.id;
    });
  })
  .then(function (albums) {
    return spotifyApi.getAlbums(albums);
  })
  .then(function (data) {
    console.log("POSTY", data);
  });


class Home extends React.Component{
  

    render(){
        return(
            <div>
                <Nav/>
               <div id="search-container">
                <form action="/action_page.php" id="search-form">
                  <input id="search-input" type="text" placeholder="Search.." name="search"/>
                  <button id="search-icon" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
               </div>

               <div id="search-categories">
                 <div id="div-songs">
                  <button type="submit" id="btn-songs">
                    Songs
                  </button>
                 </div>
                
                 <div id="div-albums">
                  <button type="submit" id="btn-albums">
                       <NavLink id="linkAlbum" to='/albums'>
                            Albums
                            </NavLink>
                  </button>
                 </div>

                <div id="div-artists">
                  <button type="submit" id="btn-artists">
                    Related Artists
                  </button>
                 </div>
               </div>
            </div>
  
        )
    }
}

export default Home;