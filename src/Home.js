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
               <div></div>
            </div>
  
        )
    }
}

export default Home;