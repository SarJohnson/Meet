import EventList from './components/EventList.js';
import './App.css';
import CitySearch from './components/CitySearch.js';
import NumberOfEvents from './components/NumberOfEvents.js';

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;
