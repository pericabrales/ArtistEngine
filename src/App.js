import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import RedirectPage from './RedirectPage';
import NotFound from './NotFound';
import HomePage from './Home'
import AlbumSongs from './AlbumSongsSearch';
import Logins from './Login'
import Album from './Albums'
import AuthToken from './AuthToken';

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

function App() {
  //collects the access token and puts it in the state for use later
  AuthToken();

  return (
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route exact path="/search">
        <Home />
      </Route>
      <Route exact path="/albums">
        <Albums query={useQueryString().q}/>
      </Route>
      <Route path="/albums/tracks">
        {/* currently putting in an album id for testing */}
        <AlbumSongs album={"5U5rt98q8Jqx4lP3RdqYfO"}/>
      </Route>
      <Route path="/redirect">
        <RedirectPage/>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
