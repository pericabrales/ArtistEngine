import {
  ALBUM_SONGS_SUCCESS,
  ALBUM_SONGS_ERROR
} from '../actions/actions';

export const albumsReducer = (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  export function albumSongsReducer(state = [], action){
    console.log("action type: ", action.type);
    switch(action.type){
      case ALBUM_SONGS_SUCCESS:
        return{
          ...state,
          songs: action.songs

        };
      case ALBUM_SONGS_ERROR:
        return{
          ...state
        };

      default:
        return state;
    }
  }