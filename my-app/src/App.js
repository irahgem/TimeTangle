import React, { useState, useEffect } from 'react';
import DateGraph from './components/DateGraph';
import TimeGraph from './components/TimeGraph';
// import fetchData from './components/utils/fetchData';
import x from './components/utils/data.json';
import './App.css';
import Chart from 'chart.js/auto';

function App() {
  const [data, setData] = useState(x);
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(x)
  // useEffect(() => {
  //   console.log(x)
  //   fetchData().then((data) => setData(data));
  // }, []);

  return (
    <div className="App">
      <h1>Customer Scheduling Patterns</h1>
      <DateGraph data={data} setSelectedDate={setSelectedDate} />
      {selectedDate && <TimeGraph data={data} selectedDate={selectedDate} />}
    </div>
  );
}

export default App;
