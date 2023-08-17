import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import './RangeSlider.css';
const RangeSlider = (props) => {
  const {rangeValue,handleChange}=props;
  // const [value, setValue] = useState([40]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <Box sx={{ width: 210 }} className="range_slider">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={rangeValue}
          onChange={handleChange}
          valueLabelDisplay="off"
          className="range_slider_value"
          getAriaValueText={valuetext}
        />
      </Box>
    </>
  );
};

export default RangeSlider;
