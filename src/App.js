import useJsonFetch from './useJsonFetch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

function Data() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
  console.log('data loading', loading)
  console.log('data error', error)
  console.log('data data', data)
  return(
    <div>
    </div>
  );
}

function Error() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');
  console.log('error loading', loading)
  console.log('error error', error)
  console.log('error data', data)
  return(
    <div>
    </div>
  );
}

function Loading() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');
  console.log('loading loading', loading)
  console.log('loading error', error)
  console.log('loading data', data)
  return(
    <div>
    </div>
  );
}

export default App;
