import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import imgcircle from "../../assets/images/footer--title--circel4.png";
import "./FooterImg.css";
const FooterImg = () => {
  return (
    <Container>
      <Box className="row personal--bottom--circle---for--relative">
        <Box className="personal--bottom--circle">
          <img src={imgcircle} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

export default FooterImg;
