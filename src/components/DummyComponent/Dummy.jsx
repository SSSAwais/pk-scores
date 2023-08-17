import { Box } from "@mui/system";
import React from "react";
import AbsButton from "../absButton/AbsButton";
import PrevBUtton from "../prevButton/PrevBUtton";
import "./Dummy.css";
const Dummy = (props) => {
  const _handleSubmit = (e) => {
    e.preventDefault();
    props.next();
  };
  const _handleSubmit02 = (e) => {
    e.preventDefault();
    props.pre();
  };
  return (
    <>
      <h1> {props.text} </h1>
      <Box className="button_Compo">
        <PrevBUtton
          prev_name="Previews"
          type="submit"
          onClick={_handleSubmit02}
        />
        {props.text === "Financial Health / PFI Score" ? (
          ""
        ) : (
          <AbsButton title="Next Page" type="submit" onClick={_handleSubmit} />
        )}
      </Box>
    </>
  );
};

export default Dummy;
