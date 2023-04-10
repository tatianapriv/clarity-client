import React from "react";
import "./UserProfile.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../Mood/Mood";
// import gradient from "../../Assets/20.png";
import { BsSunFill } from "react-icons/bs";

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
  // ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function moodToColor(value) {
  if (value < 20) {
    return "red";
  } else if (value < 70) {
    return "orange";
  } else {
    return "green";
  }
}

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
    getMoodData();
  }, []);

  const data = {
    labels: moodData.slice(-8).map((data) =>
      new Date(data.date).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
      })
    ),
    datasets: [
      {
        label: "Mood",
        data: moodData.slice(-8).map((data) => data.value),
        // backgroundColor: "aqua",
        backgroundColor: (set) => {
          console.log("set: ", set);
          return moodToColor(set.raw);
        },
        borderColor: "black",
        pointBorderColor: "aqua",
        pointRadius: 5,
        tension: 0,
        // datalabels: {
        //   // backgroundColor: () => "aqua",
        //   borderRadius: 4,
        //   backgroundColor: (val) => {
        //     const index = val.dataIndex;
        //     const data = val.dataset.data;
        //     const currentData = data[index];
        //     // console.log("val:", val);
        //     return moodToColor(currentData);
        //   },
        //   font: {
        //     weight: "bold",
        //     color: "black",
        //   },
        //   formatter: (num) => {
        //     return "";
        //     // return getMoodFromValue(num);
        //   },
        // },
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
    plugins: {
      tooltip: {
        callbacks: {
          label: (value) => {
            console.log("FORMATTED: ", value.formattedValue);
            // return <BsSunFill />;
            return getMoodFromValue(value.formattedValue);
          },
        },
      },
    },
  };

  return (
    <>
      <section className="userProfile">
        <div className="chart" id="myChart">
          <Line data={data} options={options} />
        </div>
        <div className="comments">
          <BsSunFill />
          {moodData.slice(-3).map((data, index) => (
            <li key={index}>
              <div className="comments__header">
                {/* <h4 className="comments__username">{data.user_name}</h4> */}
                <span className="comments__timestamp">
                  {new Date(data.date).toLocaleString()}
                </span>
              </div>
              <p className="comments__content">{data.comment}</p>
            </li>
          ))}
        </div>
      </section>
    </>
  );
}
