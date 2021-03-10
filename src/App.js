import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Home'
import AlbumSongs from './AlbumSongsSearch';

function Home(){
  return (
    <HomePage/>
  );
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/albums/tracks">
        <AlbumSongs album={"5U5rt98q8Jqx4lP3RdqYfO"}/>
      </Route>
      
    </Switch>
  );
}

export default App;
