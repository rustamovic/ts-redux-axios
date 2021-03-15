import { useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionDispatchers} from '../state/index';

export const  useActions = () =>{
    const dispatch = useDispatch();

    bindActionCreators(actionDispatchers, dispatch);
}