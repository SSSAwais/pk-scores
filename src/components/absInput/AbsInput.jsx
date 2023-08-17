import React from "react";
import "./AbsInput.css";
import { Box, Input } from "@mui/material";
const AbsInput = (props) => {
  const { placeholder, type, name, onChange, value } = props;
  return (
    <>
      <Box className="input_signUp">
        <Input
          placeholder={placeholder}
          type={type}
          name={name}
          autoFocus={false}
          disableUnderline={true}
          value={value}
          onChange={onChange}
          fullWidth={true}
        />
      </Box>
    </>
  );
};

export default AbsInput;
