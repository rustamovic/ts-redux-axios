import {Provider} from 'react-redux';
import {store} from './state/store';
import RepoList from './components/RepoList';
const App = () => {
  return (
    <Provider store={store}>
      <div>
      <h1>Search a package</h1>
      <RepoList/>
      </div>
    </Provider>
  )
}
export default App;