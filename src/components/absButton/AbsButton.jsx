import React from "react";
import "./AbsButton.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const AbsButton = (props) => {
  const { title, type, onClick } = props;
  return (
    <>
      <button className="abs_button" type={type} onClick={onClick}>
        {title} <ArrowForwardIcon />
      </button>
    </>
  );
};

export default AbsButton;
