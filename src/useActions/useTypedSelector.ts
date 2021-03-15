import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../state/reducer/index';

export  const useTSelector: TypedUseSelectorHook<RootState> = useSelector;