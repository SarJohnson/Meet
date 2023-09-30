import EventList from './components/EventList.js';
import './App.css';
import CitySearch from './components/CitySearch.js';

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
