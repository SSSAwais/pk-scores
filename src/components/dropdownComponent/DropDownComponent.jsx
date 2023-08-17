import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DropDownComponent.css";
const DropDownComponent = (props) => {
  const { option1, option2, option3, option4,value , handleChange } = props;
  // const [value, setValue] = React.useState("");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <>
      <div className="selection_wrapepr">
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          className="Selection_inner"
        >
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={value}
            className="selected_items"
            onChange={handleChange}
          >
            <MenuItem value={1}>{option1}</MenuItem>
            <MenuItem value={2}>{option2}</MenuItem>
            <MenuItem value={3}>{option3}</MenuItem>
            <MenuItem value={4}>{option4}</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default DropDownComponent;
