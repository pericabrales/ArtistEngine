import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';


const Login = (props) => {
   
  const loginUser = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=329c4cd904cc43edb33630af5261595d&redirect_uri=http://localhost:3000/search&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login" align="center">
      <Header />
      <Button id="login" variant="info" type="submit" onClick={loginUser} >
        LOGIN TO SPOTIFY
      </Button>
    </div>
  );
};
export default connect()(Login);