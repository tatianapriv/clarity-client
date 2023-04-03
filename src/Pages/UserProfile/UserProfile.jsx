import React from "react";
import "./UserProfile.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
// import React, { useRef, useEffect } from "react";

import {
  // Chart as ChartJS,
  // LineElement,
  // CategoryScale, // x axis
  // LinearScale, // y axis
  // PointElement,
  // Legend,
  // Tooltip,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getMoodFromValue } from "../Mood/Mood";

ChartJS.register(
  // LineElement,
  // CategoryScale, // x axis
  // LinearScale, // y axis
  // PointElement,
  // Legend,
  // Tooltip,
  // Chart
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart.register(ChartDataLabels);

// var DATA_COUNT = 8;
// var labels = [];

// Utils.srand(8);

// for (var i = 0; i < DATA_COUNT; ++i) {
//   labels.push('' + i);
// }

export default function UserProfile() {
  const fakeData = [
    {
      mood: 80,
      date: "mon",
    },
    {
      mood: 80,
      date: "tues",
    },
    {
      mood: 80,
      date: "wed",
    },
    {
      mood: 80,
      date: "thur",
    },
    {
      mood: 80,
      date: "fri",
    },
  ];
  const data = {
    labels: fakeData.map((data) => data.date),
    datasets: [
      {
        label: "Mood Chart",
        data: [6, 3, 9, 80],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
        datalabels: {
          backgroundColor: () => "aqua",
          borderRadius: 4,
          color: "white",
          font: {
            weight: "bold",
          },
          formatter: (num) => {
            return getMoodFromValue(num);
          },
        },
      },
    ],
  };
  // const options = {
  //   plugins: {
  //     legend: true,
  //     // datalabels: {
  //     //   backgroundColor: function (context) {
  //     //     return context.dataset.backgroundColor;
  //     //   },
  //     //   borderRadius: 4,
  //     //   color: "white",
  //     //   font: {
  //     //     weight: "bold",
  //     //   },
  //     //   formatter: (num) => {
  //     //     let mood = "";
  //     //     if (num < 15) {
  //     //       mood = "awful";
  //     //     } else if (num <= 30) {
  //     //       mood = "very bad";
  //     //     } else if (num <= 50) {
  //     //       mood = "bad";
  //     //     } else if (num <= 60) {
  //     //       mood = "okay";
  //     //     } else if (num <= 75) {
  //     //       mood = "good";
  //     //     } else if (num <= 90) {
  //     //       mood = "very good";
  //     //     } else {
  //     //       mood = "amazing";
  //     //     }
  //     //     return mood;
  //     //   },
  //     // },
  //   },
  // };
  return (
    <div className="chart" id="myChart">
      {/* <Line data={data} options={options}></Line> */}
      <Line data={data} />
    </div>
  );
}
