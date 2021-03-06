import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {useDispatch, useSelector} from 'react-redux';

import {addToken} from './actions/actions';

import RedirectPage from './RedirectPage';
import NotFound from './NotFound';
import HomePage from './Home'
import AlbumSongsSearch from './AlbumSongsSearch';
import Logins from './Login'
import Album from './Albums'
import RelatedArtists from './RelatedArtists';
import AlbumSongs from './AlbumSongs.js';
import Nav from './Nav';
import Songs from './Songs'

import { getToken } from './selectors/selector';
//import AuthToken from './AuthToken';

function Home(){
  return (
    <HomePage/>
  );
}

function Albums(){
  return (
    <Album/>
  )
}

function Login(){
  return (
    <Logins/>
  )
}

function useQueryString() {
  return queryString.parse(useLocation().search);
}

//grabbing the token and throwing it into the state so we can grab it from anywhere
function AuthToken(){
  const authHeader = window.location.hash.substring(1).split("&").reduce(function(curUrl, char) {
      if(char){
        var newChar = char.split("=");
        curUrl[newChar[0]] = decodeURIComponent(newChar[1]);
      }
      return curUrl;
    }, {});
  
    console.log("current url: ", authHeader.access_token);

    const dispatch = useDispatch();

    if(authHeader.access_token){
      console.log("access token: ", authHeader.access_token)

      const token = addToken(authHeader.access_token, authHeader.token_type);
      dispatch(token);

      console.log("dispatched token");
    }
}

function App() {
  //collects the access token and puts it in the state for use later
  AuthToken();

  //grabbing the token
  // const token = useSelector(getToken);
  // console.log("token in app: ", token);

  return (
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>

      <Route exact path="/search">
        <Home />
      </Route>

      <Route path="/songs">
        <div>
          <Nav/>
          <Songs query={useQueryString().q}/>
        </div>
      </Route>

      <Route path="/albums">
      <div>
          <Nav/>
          <Albums query={useQueryString().q}/>
        </div>
      </Route>

      <Route path="/related-artists">
        <div>
          <Nav/>
          <RelatedArtists query={useQueryString().q}/>
        </div>
      </Route>

      <Route path="/album-songs">
        <div>
          <Nav/>
          <AlbumSongs query={useQueryString().q}/>
        </div>
      </Route>

      <Route path="/album/album-songs">
        <div>
          <Nav/>
          <AlbumSongsSearch album={""}/>
        </div>
      </Route>

      <Route path="/redirect">
        <RedirectPage/>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
