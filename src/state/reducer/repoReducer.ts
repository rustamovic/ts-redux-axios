import {ActionTypes} from '../actionTypes/index';
import {Action} from '../action/index';

interface RepoState{
    loading: boolean;
    error: string | null;
    data: string[];
}
const initialState ={
    loading: false,
    error: null,
    data: []
}
const reducer = (
    state:RepoState = initialState, 
    action:Action
    ):RepoState =>{
    switch(action.type){
        case ActionTypes.SEARCH_REPO:
            return {loading: true, error: null, data:[]}
        case ActionTypes.SEARCH_REPO_SUCCES:
            return {loading: false, error: null, data:action.payload}
        case ActionTypes.SEARCH_REPO_ERROR:
            return {loading: false, error: action.payload, data:[]}
        default:
            return state;
    }
};
export default reducer;