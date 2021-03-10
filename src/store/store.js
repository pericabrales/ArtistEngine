import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { albumSongsReducer, albumsReducer } from '../reducers/albums';
import tokenReducer from '../reducers/TokenReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    token: tokenReducer,
    albums: albumsReducer,
    albumSongs: albumSongsReducer
    
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;