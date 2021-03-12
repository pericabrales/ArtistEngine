import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getToken} from './selectors/selector';

import Nav from './Nav';

import './index.css';


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
                    <NavLink id="linkSong" to='/songs'>
                       Songs
                     </NavLink>
                  </button>
                 </div>
                
                 <div id="div-albums">
                  <button type="submit" id="btn-albums">
                       <NavLink id="linkAlbum" to='/albums'>
                            Albums
                            </NavLink>
                  </button>
                 </div>

                 <div id="div-albums-songs">
                  <button type="submit" id="btn-album-songs">
                    <NavLink id="linkAlbumSongs" to='/album-songs'>
                      Album Songs
                    </NavLink>
                  </button>
                 </div>

                <div id="div-artists">
                  <button type="submit" id="btn-artists">
                    <NavLink id="linkRelatedArtists" to='/related-artists'>
                      Related Artists
                    </NavLink>
                  </button>
                 </div>
               </div>
            </div>
  
        )
    }
}

export default Home;