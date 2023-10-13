import { useState, useEffect } from 'react';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer 
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
    const [data, setData] = useState([]);

    const getData = () => {
        const data = allLocations.map((location) => {
          const count = events.filter((event) => event.location === location).length;
          const city = location.split((/, | - /))[0];
          return { city, count };
        });
        return data;
    };
    
    useEffect(() => {
      setData(getData());
  }, [`${events}`]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart 
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: -30,
        }}
      >
      <CartesianGrid stroke="#e097a6" strokeDasharray="5 5" />
      <XAxis type="category" dataKey="city" name="City" angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14, fill: "#e097a6" }} />
      <YAxis type="number" dataKey="count" name="Number of Events" tick={{ fill: "#e097a6" }} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={data} fill="#e097a6" line shape="star" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;