import React, { useState } from "react";
import "react-rangeslider/lib/index.css";
import Slider from "react-rangeslider";
import "./RangeSliderGR.css";
const RangeSliderGR = ({ val, handleOnChange, min, max }) => {
  return (
    <div className="range--slider--gr">
      <Slider
        value={Number(val)}
        min={min}
        max={max}
        onChange={handleOnChange}
        tooltip={false}
      />
    </div>
  );
};

export default RangeSliderGR;
