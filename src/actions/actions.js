export const ADD_TOKEN = "ADD_TOKEN";
export const ALBUM_SONGS_SUCCESS = "ALBUM_SONGS_SUCCESS";
export const ALBUM_SONGS_ERROR = "ALBUM_SONGS_ERROR";


export function addToken(access_token, token_type){
    return{
        type: ADD_TOKEN,
        access_token,
        token_type
    }
}

//on success of getting the album's songs
export function albumSongsSuccess(songs){
    return {
        type: ALBUM_SONGS_SUCCESS,
        songs
    }
}

//when an error occurs
export function albumSongsError(error){
    return{
        type: ALBUM_SONGS_ERROR
    }
}

//Source: https://github.com/Pau1fitz/react-spotify/blob/master/src/actions/albumActions.js
export const getAlbumSongs = (access_token, token_type, album_id) => {
    return dispatch => {
        const req = new Request(`https://api.spotify.com/v1/albums/${album_id}/tracks`, {
            headers: new Headers({
                'Authorization': token_type + ' ' + access_token
            })
        });
        console.log("req: ", req);
        //dispatch()
        
        fetch(req).then(res => {
            if(res.statusText === "Unauthorized"){
                window.location.href = './';
            }
            return res.json();
        }).then(res => {
            console.log("res items: ", res.items);
            dispatch(albumSongsSuccess(res.items));
        }).catch(e => {
            dispatch(albumSongsError(e));
        });

    };
};