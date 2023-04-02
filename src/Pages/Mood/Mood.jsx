import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import { useState } from "react";
import { useSpring } from "react-spring";
import "./Mood.scss";

function getMoodFromValue(moodValue) {
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
}

function Mood() {
  const [moodValue, setMoodValue] = useState(0);
  const [mood, setMood] = useState("");
  return (
    <div>
      <section className="mood">
        <h2>Choose your current mood</h2>
        <div className="mood__container">
          <CircularSlider
            dataIndex={moodValue}
            min={0}
            max={100}
            // trackColor="#eeeeee"
            trackSize={2}
            onChange={(value) => {
              console.log(value);
              setMoodValue(value);
              setMood(getMoodFromValue(value));
            }}
            renderLabelValue={
              <div className="mood__slider">
                {mood}
                {/* {moodValue} */}
              </div>
            }
          />
        </div>
      </section>

      <section className="form">
        <div className="form__box">
          <input
            type="text"
            className="form__input"
            placeholder="What's going on?"
          />
        </div>
      </section>
    </div>
  );
}

export default Mood;
