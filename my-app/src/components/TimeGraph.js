import React from 'react';
import { Bar } from 'react-chartjs-2';

function TimeGraph({ data, selectedDate }) {
  // aggregate the data by time slot
  const timeSlots = ['9am-12pm', '12pm-3pm', '3pm-6pm', '6pm-9pm'];
  const timeSlotsData = {};
  timeSlots.forEach((slot) => {
    timeSlotsData[slot] = 0;
  });
  data.forEach((schedule) => {
    const date = schedule.item_date;
    const slot = schedule.slot;
    const scheduleTime = new Date(schedule.schedule_time);
    const selectedDateTime = new Date(selectedDate);
    if (date === selectedDate && scheduleTime.getDate() === selectedDateTime.getDate()) {
      if (slot === 'L') {
        timeSlotsData['9am-12pm']++;
      } else {
        if (scheduleTime.getHours() < 18) {
          timeSlotsData['12pm-3pm']++;
        } else {
          timeSlotsData['3pm-6pm']++;
        }
        timeSlotsData['6pm-9pm']++;
      }
    }
  });

  // convert the time slots object to an array for chart.js
  const timeSlotsArray = Object.keys(timeSlotsData).map((key) => timeSlotsData[key]);

  // create the chart data
  const chartData = {
    labels: timeSlots,
    datasets: [
      {
        label: 'Scheduled meals',
        data: timeSlotsArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

  return (
    <div>
        <h3>Time Graph for {selectedDate}</h3>
        <Bar data={chartData} />
    </div>
  );
}

export default TimeGraph;