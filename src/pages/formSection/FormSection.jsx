import { Box } from "@mui/material";
import React from "react";
import FooterImg from "../../components/footerimg/FooterImg";

import VerticalLinearStepper from "../../components/steppers/Steppers";

import "./FormSection.css";
const FormSection = () => {
  return (
    <>
      <div className="form_container">
        <Box className="main_form_wrapper">
          <VerticalLinearStepper />
        </Box>
        <FooterImg />
      </div>
    </>
  );
};

export default FormSection;
