import React from "react";
import "./UserProfile.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../Mood/Mood";

import {
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
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function UserProfile() {
  const [moodData, setMoodData] = useState([]); //array of videos
  function getMoodData() {
    axios
      .get(`${api}/mood`)
      .then((response) => {
        setMoodData(response.data[0].values);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  useEffect(() => {
    // getMoodFromValue();
    getMoodData();
  }, []);

  // const moodEntry = [
  //   {
  //     mood: 80,
  //     date: "mon",
  //   },
  //   {
  //     mood: 80,
  //     date: "tues",
  //   },
  //   {
  //     mood: 80,
  //     date: "wed",
  //   },
  //   {
  //     mood: 80,
  //     date: "thur",
  //   },
  //   {
  //     mood: 80,
  //     date: "fri",
  //   },
  // ];
  const data = {
    labels: moodData.map((data) => data.date),
    datasets: [
      {
        label: "Mood Chart",
        data: moodData.map((data) => data.value),
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0,
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
  const options = {
    scales: {
      y: {
        ticks: {
          display: false, // This will remove the y-axis tick labels
        },
      },
    },
  };

  return (
    <div className="chart" id="myChart">
      {/* <Line data={data} options={options}></Line> */}
      <Line data={data} options={options} />
    </div>
  );
}
