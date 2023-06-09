import React from "react";
import "./UserProfile.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../Mood/Mood";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  if (value < 15) {
    return getFontAwesomeIconContent("f76c");
  } else if (value <= 30) {
    return getFontAwesomeIconContent("f73d");
  } else if (value <= 50) {
    return getFontAwesomeIconContent("f0c2");
  } else if (value <= 60) {
    return getFontAwesomeIconContent("f6c4");
  } else if (value <= 75) {
    return getFontAwesomeIconContent("f185");
  } else if (value <= 90) {
    return getFontAwesomeIconContent("f005");
  } else {
    return getFontAwesomeIconContent("f004");
  }
}

function getFontAwesomeIconContent(unicode) {
  return String.fromCharCode(parseInt(unicode, 16));
}

export default function UserProfile() {
  const [moodData, setMoodData] = useState([]);
  const [chartKey, setchartKey] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/tracker");
  };
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
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#bf40bf",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointRadius: 5, //to see point behind the chart icons
        tension: 0,

        borderWidth: 1,
        datalabels: {
          borderRadius: 4,
          font: {
            family: '"Font Awesome 5 Free"',
            weight: "900",
            color: "black",
            size: 18,
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
          maxTicksLimit: 8,
          color: "white",
          callback: function (value) {
            return getMoodFromValue(value);
          },
          // display: false, // This will remove the y-axis tick labels
        },
      },
      x: {
        ticks: {
          color: "white",
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

  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">Clarity</Link>
        </div>

        <div className="nav__container">
          <ul className="nav__items">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="userProfile">
        <div
          className={`chart ${chartKey >= 1 ? "" : "chart--hide"}`}
          id="myChart"
        >
          <Line key={chartKey} data={data} options={options} />
        </div>
        <div className="comments">
          {moodData.slice(-7).map((data, index) => (
            <li key={index}>
              <div className="comments__header">
                <span className="comments__timestamp">
                  {new Date(data.date).toLocaleString()}
                </span>
              </div>
              <p className="comments__content">{data.comment}</p>
            </li>
          ))}
        </div>

        <div className="button">
          <button className="button__cta" onClick={handleSubmit}>
            <span>Back</span>
          </button>
        </div>
      </section>
    </>
  );
}
