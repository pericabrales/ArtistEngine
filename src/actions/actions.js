export const ADD_TOKEN = "ADD_TOKEN"


export function addToken(access_token, token_type){
    return{
        type: ADD_TOKEN,
        access_token,
        token_type
    }
}