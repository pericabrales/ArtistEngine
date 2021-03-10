import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import RedirectPage from './RedirectPage';
import NotFound from './NotFound';
import HomePage from './Home'
import Logins from './Login'
import Album from './Albums'

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
      <Route path="/redirect">
        <RedirectPage/>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
