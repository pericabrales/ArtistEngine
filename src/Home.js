import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Nav from './Nav';

import './index.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQDI8O-LotoSq_xfbcta-9XASwtGzhInpcFXecy8gjiHKGD1QFxq9RnwtciwSJ1SaZMEnccYXiCS3QIhN0RGfOy9JMnbjDi7za_YkfSgjVNX5l8hNQWocy6aoU73MHtvXJQdN0HThOUWUPU');

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