import {useDispatch} from 'react-redux';
import {addToken} from './actions/actions';


function AuthToken(){
    const authHeader = window.location.hash.substring(1).split("&").reduce(function(curUrl, char) {
        if(char){
          var newChar = char.split("=");
          curUrl[newChar[0]] = decodeURIComponent(newChar[1]);
        }
        return curUrl;
      }, {});
    
      console.log("current url: ", authHeader);

      console.log("access token: ", authHeader.access_token)

      const token = addToken(authHeader.access_token, authHeader.token_type);
      const dispatch = useDispatch();
      dispatch(token);

      console.log("dispatched token");
}

export default AuthToken;