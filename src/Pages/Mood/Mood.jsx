import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Mood.scss";

import axios from "axios";

export const api = process.env.REACT_APP_URL;

export const getMoodFromValue = (moodValue) => {
  let mood = "";
  if (moodValue < 15) {
    mood = "awful";
  } else if (moodValue <= 30) {
    mood = "very bad";
  } else if (moodValue <= 50) {
    mood = "bad";
  } else if (moodValue <= 60) {
    mood = "okay";
  } else if (moodValue <= 75) {
    mood = "good";
  } else if (moodValue <= 90) {
    mood = "very good";
  } else {
    mood = "amazing";
  }
  return mood;
};

function Mood() {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const [moodValue, setMoodValue] = useState(0);
  const [mood, setMood] = useState("");
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeString = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
    axios
      .post(`${api}/mood`, {
        userId: "1234",
        value: moodValue,
        date: currentDate,
        dateString,
        timeString,
        comment,
      })
      .then(() => {
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  };

  return (
    <div className="container">
      <section className="mood">
        <h2 className="mood__title">Choose your current mood</h2>
        <div className="mood__container">
          <CircularSlider
            dataIndex={moodValue}
            min={0}
            max={100}
            progressColorFrom="darkred"
            progressColorTo="light pink"
            progressSize={4}
            knobColor="black"
            trackSize={2}
            onChange={(value) => {
              setMoodValue(value);
              setMood(getMoodFromValue(value));
            }}
            renderLabelValue={<div className="mood__slider">{mood}</div>}
          />
        </div>
      </section>

      <form
        onSubmit={(event) => handleSubmit(event)}
        id="form"
        className="form"
      >
        <div className="form__box">
          <textarea
            type="text"
            className="form__input"
            placeholder="What's going on?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="button">
          <button className="button__cta">
            <span>Done</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Mood;
