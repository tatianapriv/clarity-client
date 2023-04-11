import React from "react";
import "./UserProfile.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../Mood/Mood";
// import gradient from "../../Assets/20.png";
// import { BsSunFill } from "react-icons/bs";
// import { renderToString } from "react-dom/server";


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

function moodToColor(value) {
  if (value < 20) {
    return "red";
  } else if (value < 70) {
    return "orange";
  } else {
    return "green";
  }
}
//icons
function moodToIcon(value) {
  if (value < 20) {
    return getFontAwesomeIconContent("f76c");
  } else if (value < 70) {
    return "orange";
  } else {
    return getFontAwesomeIconContent("f185");
  }
}

function getFontAwesomeIconContent(unicode) {
  return String.fromCharCode(parseInt(unicode, 16));
}

export default function UserProfile() {
  const [moodData, setMoodData] = useState([]); //array of videos
  const [chartKey, setchartKey] = useState(0);

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
    setTimeout(() => {
      setchartKey((prev) => prev + 1);
    }, 500);
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
          // console.log("set: ", set);
          return moodToColor(set.raw);
        },
        borderColor: "#bf40bf",
        pointBorderColor: "aqua",
        pointRadius: 0, //to see point behind the chart icons
        tension: 0,
        borderWidth: 1,
        datalabels: {
          // backgroundColor: () => "aqua",
          borderRadius: 4,
          
          // backgroundColor: (val) => {
          //   const index = val.dataIndex;
          //   const data = val.dataset.data;
          //   const currentData = data[index];
          //   // console.log("val:", val);
          //   return moodToColor(currentData);
          // },
          font: {
            family: '"Font Awesome 5 Free"',
            weight: "900",
            color: "black",
            size: 20,
            // padding: 0,
          },
          color: "white",

          formatter: (num) => {
            return moodToIcon(num);
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
    plugins: {
      labels: {
        render: "image",
        textMargin: 10,
        images: [
          {
            src: "https://i.stack.imgur.com/9EMtU.png",
            width: 20,
            height: 20,
          },
          null,
        ],
      },
      tooltip: {
        callbacks: {
          label: (value) => {
            console.log("FORMATTED: ", value.formattedValue);

            return getMoodFromValue(value.formattedValue);
          },
        },
      },
    },
  };

  // console.log("chartke: , ", chartKey);
  return (
    <>
      <section className="userProfile">
        <div
          className={`chart ${chartKey >= 1 ? "" : "chart--hide"}`}
          id="myChart"
        >
          <Line key={chartKey} data={data} options={options} />
        </div>
        <div className="comments">
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
