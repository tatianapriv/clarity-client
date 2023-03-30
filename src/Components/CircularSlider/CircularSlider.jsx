import React, { useState } from "react";
import Slider from "@fseehawer/react-circular-slider";

function CircularSlider() {
  console.log("hello");
  return (
    <Slider
      label="I feel"
      labelColor="#005a58"
      knobColor="#005a58"
      progressColorFrom="linear-gradient(to right, #ff69b4, #9370db, #4b0082)"
      progressColorTo="#009c9a"
      progressSize={24}
      trackColor="#eeeeee"
      trackSize={24}
      data={["Good", "Bad"]} //...
      dataIndex={10}
      onChange={(value) => {
        console.log("value: ", value);
      }}
    />
  );
}
export default CircularSlider;
