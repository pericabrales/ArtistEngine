import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../reducers/albums';
import tokenReducer from '../reducers/TokenReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    token: tokenReducer,
    albums: albumsReducer
    
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;