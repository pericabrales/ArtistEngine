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
                  <button  type="submit" id="btn-songs" onClick={ () => (
                    test = document.getElementById("search-input").value,
                    test ? history.push(`/songs/${test}`) : alert("Fill out the search field")
                  )}>
                    Songs
                  </button>
                 </div>
                
                 <div id="div-albums">
                 <button type="submit" id="btn-artists" onClick={() => (
                    test = document.getElementById("search-input").value,
                    test ? history.push(`/albums/${test}`) : alert("Fill out the search field")
                  )}>
                    Albums
                  </button>
                 </div>

                 <div id="div-albums-songs">
                  <button type="submit" id="btn-album-songs"onClick={ () => (
                    test = document.getElementById("search-input").value,
                    test ? history.push(`/album-songs/${test}`) : alert("Fill out the search field")
                  )}>
                      Album Songs
                  </button>
                 </div>

                <div id="div-artists">
                  <button type="submit" id="btn-artists" onClick={() => (
                    test = document.getElementById("search-input").value,
                    test ? history.push(`/related-artists/${test}`) : alert("Fill out the search field")
                  )}>
                    Related Artists
                  </button>
                 </div>
               </div>
            </div>
  
        )
    
}

export default Home;