import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Home'

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
      
    </Switch>
  );
}

export default App;
