import {useState, memo} from 'react'
import {useDispatch} from 'react-redux';
import {actionDispatchers} from '../state/index';
import {useTSelector} from '../useActions/useTypedSelector'
const RepoList: React.FC = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const {data, loading, error} = useTSelector((state)=>state.repos)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(actionDispatchers.searchRepo(term))
    }
    return (
        <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)}/>
        <button>Search</button>
        {error && <h1>Error</h1>}
        {loading && <h1>Loading...</h1>}
        {!error && !loading && <ul>
                 {data.map((info, key:number) => {
                 return (
                <li key={key} >{info}</li>
                 )
                 })}
                  </ul>}    
        </form>
    )
}
export default RepoList;