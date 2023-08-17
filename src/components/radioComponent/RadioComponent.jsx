import React from "react";
import "./RadioComponent.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import "./RadioComponent.css";
const RadioComponent = (props) => {
    const {label1,label2,value1,value2, name,options , handleRadioOption}=props;
 
  return (
    <div className="radio_wrapper">
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          className="radio_wrapper"
        >
          <FormControlLabel value={value1} name={options} control={<Radio />} label={label1} className="radio_option1" onChange={handleRadioOption} />
          <FormControlLabel
            value={value2}
            name={options}
            control={<Radio />}
            label={label2}
            onChange={handleRadioOption}
          />
        </RadioGroup>
      </FormControl>
      {/* <input type="radio" value={value} name={name}/>
      <label>{label1}</label>
      <input type="radio" value={value} name={name} label={label2}/>
      <label>{label1}</label> */}
    </div>
  );
};

export default RadioComponent;
