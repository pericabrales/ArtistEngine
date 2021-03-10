import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Home'
import AlbumSongs from './AlbumSongs';

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
        <AlbumSongs />
      </Route>
      
    </Switch>
  );
}

export default App;
