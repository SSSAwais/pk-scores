import { Container, Box } from "@mui/material";

import React from "react";
import "./Herosection.css";
import heroimage from "../../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import circle from "../../assets/images/hero-circel.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import herocicle from "../../assets/images/hero---cicle.png";

const Herosection = () => {
  return (
    <>
      <Container maxWidth="lg" className="Herosection">
        <Box className="row hero--first--row">
          <Box className="column hero--section--left">
            <div className="responseiv--circle">
              <img src={herocicle} alt="" className="herocicle" />
            </div>
            <h3 className="title">
              A complete financial <br /> health checkup!
            </h3>
            <p>
              Check your proficiency in managing your personal finances.
              Personal Financial Index® (PFI) is a comprehensive financial
              benchmark for individuals and families.
            </p>

            <Box className="hero--sec--btns">
              <button className="btn l">
                <Link to="/financial-health">
                  Try For Free
                  <ArrowForwardIcon />
                </Link>
              </button>
              <button className="btn about-pfi">
                <Link to="/form-detail">About PFI</Link>
              </button>
              <Box className="about--login--responsive">
                <button className="btn login--btn">
                  <Link to="/signup">Login</Link>
                </button>
              </Box>
            </Box>
          </Box>
          <Box className="column hero--section--right">
            <img src={heroimage} alt="heroimage" />
          </Box>
        </Box>

        <Box className="row hero--second--row">
          <Box className="col hero--second--img">
            <img src={circle} className="circle" alt="" />
          </Box>
          <Box className="col hero--sec--right ">
            <h4 className="sub-tit">
              Just 15 minutes and you will have the result.
            </h4>
            <p>
              However, you need not complete it in one go as your information is
              automatically saved for future use.
            </p>
            <button className="show-detial">
              <Link to={"/"}>Show details</Link>
            </button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Herosection;
