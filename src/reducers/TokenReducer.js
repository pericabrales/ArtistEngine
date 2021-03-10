import{
    ADD_TOKEN
} from '../actions/actions';

function tokenReducer(state = [], action){
    switch(action.type){
        case ADD_TOKEN:
            return {
                access_token: action.access_token,
                token_type: action.token_type
            }

        default:
            return state;
    }
}

export default tokenReducer;