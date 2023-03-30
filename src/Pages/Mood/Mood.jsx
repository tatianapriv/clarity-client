import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import { useState } from "react";
import { useSpring } from 'react-spring';
import "./Mood.scss";


function getMoodFromValue(moodValue) {
  let mood = "";
  if (moodValue > 50) {
    mood = "good";
  } else {
    mood = "bad";
  }
  return mood;
}

function Mood() {
  const [moodValue, setMoodValue] = useState(30);
  const [mood, setMood] = useState("");
  return (
    <div>
        <section className="mood">
      <div className="mood__container">
        <CircularSlider
          dataIndex={moodValue}
          min={0}
          max={100}
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
        
      </section>
    </div>
    
  );
}

export default Mood;
