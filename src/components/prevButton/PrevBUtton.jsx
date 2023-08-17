import React from "react";
import "./PrevBUtton.css";
import { Box, Link } from "@mui/material";
const PrevBUtton = (props) => {
  const { prev_name, onClick } = props;
  return (
    <>
      <Box className="header_right">
        <button className="login--btn" onClick={onClick}>
          <Link to="/signup">{prev_name}</Link>
        </button>
      </Box>
    </>
  );
};

export default PrevBUtton;
