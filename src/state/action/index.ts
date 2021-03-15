import {ActionTypes} from '../actionTypes/index'
interface SearchRepo {
    type:ActionTypes.SEARCH_REPO;
}
interface SearchRepoSucces{
    type:ActionTypes.SEARCH_REPO_SUCCES;
    payload: string[];
}
interface SearchRepoError{
    type:ActionTypes.SEARCH_REPO_ERROR,
    payload: string
}
export type Action = SearchRepo | SearchRepoSucces | SearchRepoError
