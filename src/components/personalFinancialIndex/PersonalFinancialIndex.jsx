import React from "react";
import { Box } from "@mui/material";
import "./PersonalFinancialIndex.css";
const PersonalFinancialIndex = () => {
  return (
    <>
      <Box className="personal_column_">
        <h4>Personal Financial Index &#174; (PFITM)</h4>
        <Box className="audio_section">
          <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
          </audio>
        </Box>
      </Box>
    </>
  );
};

export default PersonalFinancialIndex;
