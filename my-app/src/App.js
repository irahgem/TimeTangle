import React, { useState, useEffect } from 'react';
import DateGraph from './components/DateGraph';
import TimeGraph from './components/TimeGraph';
import fetchData from './utils/fetchData';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const url = 'https://www.jsonkeeper.com/b/P2VO';
    fetchData(url).then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Customer Scheduling Patterns</h1>
      <DateGraph data={data} setSelectedDate={setSelectedDate} />
      {selectedDate && <TimeGraph data={data} selectedDate={selectedDate} />}
    </div>
  );
}

export default App;
