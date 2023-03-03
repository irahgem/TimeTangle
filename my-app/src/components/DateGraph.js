import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./DateGraph.css";
import TimeGraph from "./TimeGraph"; // import the TimeGraph component

function DateGraph({ data }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [chartData, setChartData] = useState(null);

  // aggregate the data by date
  const dates = {};
  data.forEach((schedule) => {
    const date = schedule.item_date;
    if (!dates[date]) {
      dates[date] = 0;
    }
    dates[date]++;
  });

  // convert the dates object to an array for chart.js
  const chartLabels = Object.keys(dates);
  const chartValues = Object.values(dates);

  // create the chart data object
  const chartDataObject = {
    labels: chartLabels,
    datasets: [
      {
        label: "Scheduled Meals",
        data: chartValues,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const handleDateClick = (event, chartElements) => {
    if (chartElements.length > 0) {
      const selectedDate = new Date(chartElements[0].label);
      setSelectedDate(selectedDate);
      setChartData(selectedDate); // add this line to update the chartData state
    }
  };

  return (
    <div className="chart-container">
      {chartDataObject && (
        <>
          <Bar
            data={chartDataObject}
            options={{
              onClick: handleDateClick,
              scales: {
                yAxes: {
                  beginAtZero: true,
                },
              },
            }}
          />
          {selectedDate && (
            <TimeGraph data={data} selectedDate={selectedDate} />
          )}
        </>
      )}
    </div>
  );
}

export default DateGraph;
