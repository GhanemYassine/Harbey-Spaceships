import NavBar from './components/NavBar';
import { SearchInputs } from './components/search/Search';
import { Provider } from 'jotai';
import { ShipsList } from './components/ships/ShipsList';



function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchInputs />
      <ShipsList/>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>(
  <Provider>
    <App/>
  </Provider>
);
