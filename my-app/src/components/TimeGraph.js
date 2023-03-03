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

    if (date === selectedDate && scheduleTime.getDate() === selectedDateTime.getDate()) { // add this condition to check for the selected date
      if (slot === 'L') {
        timeSlotsData['9am-12pm']++;
      } else {
        if (scheduleTime.getHours() >= 9 && scheduleTime.getHours() < 12) {
          timeSlotsData['9am-12pm']++;
        } else if (scheduleTime.getHours() >= 12 && scheduleTime.getHours() < 15) {
          timeSlotsData['12pm-3pm']++;
        } else if (scheduleTime.getHours() >= 15 && scheduleTime.getHours() < 18) {
          timeSlotsData['3pm-6pm']++;
        } else if (scheduleTime.getHours() >= 18 && scheduleTime.getHours() < 21) {
          timeSlotsData['6pm-9pm']++;
        }
      }
    }

  });


  // create the chart data object
  const chartData = {
    labels: timeSlots,
    datasets: [
      {
        label: `Scheduled Time Slots for ${selectedDate.toLocaleDateString()}`, // convert the selectedDate to a string
        data: Object.values(timeSlotsData),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  // set the chart options
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h3>Time Scheduled Graph for {selectedDate.toLocaleDateString()}</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}


export default TimeGraph;
