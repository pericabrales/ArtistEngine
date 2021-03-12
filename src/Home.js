import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getToken} from './selectors/selector';
import {useHistory} from 'react-router-dom';

import Nav from './Nav';

import './index.css';



function Home() {

  const history = useHistory();
  var str="";
if (document.getElementById('search-input') != null) {
  str = document.getElementById("search-input").value;
}
else{
  console.log("NULL SEARCH")
}

var test = "test";
    
        return(
            <div>
                <Nav/>
               <div id="search-container">
               <form action="/action_page.php" id="search-form">
                  <input id="search-input" type="text" placeholder="Search.."/>
                  
                </form>
                  
               </div>

               <div id="search-categories">
                 <div id="div-songs">
                  <button  id="btn-songs" onClick={ () => (
                    test = document.getElementById("search-input").value,
                    history.push(`/songs/${test}`)
                  )}>
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

                 <div id="div-albums-songs">
                  <button type="submit" id="btn-album-songs"onClick={ () => (
                    test = document.getElementById("search-input").value,
                    history.push(`/album-songs/${test}`)
                  )}>
                      Album Songs
                  </button>
                 </div>

                <div id="div-artists">
                  <button type="submit" id="btn-artists" onClick={() => (
                    test = document.getElementById("search-input").value,
                    history.push(`/related-artists/${test}`)
                  )}>
                    Related Artists
                  </button>
                 </div>
               </div>
            </div>
  
        )
    
}

export default Home;