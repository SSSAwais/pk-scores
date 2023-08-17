import React from "react";
import "./DropDown.css";
import { Box } from "@mui/material";
const DropDown = (props) => {
  const { title1 } = props;
  return (
    <>
      <Box className="select_question">
        <select>
          <option value="1">{title1}</option>
          <option value="2">What is Your Birth place?</option>
          <option value="3"> what is Your Favourite Pet?</option>
        </select>
      </Box>
    </>
  );
};

export default DropDown;
