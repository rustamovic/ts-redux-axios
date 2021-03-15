import axios from 'axios';
import {Dispatch} from 'redux'
import {Action} from '../action/index';
import {ActionTypes} from '../actionTypes/index';

export const searchRepo = (term: string) => {
    return async (dispatch: Dispatch<Action>)=>{
        dispatch({
            type: ActionTypes.SEARCH_REPO
        });
    try{
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
            params:{
                text: term
            }
        });
        const names = data.objects.map((result:any)=>{
            return result.package.name
        })
        dispatch({
            type: ActionTypes.SEARCH_REPO_SUCCES,
            payload: names
        })
    }catch(err){
        dispatch({
            type: ActionTypes.SEARCH_REPO_ERROR,
            payload: err.message
        })
    }
  }
}