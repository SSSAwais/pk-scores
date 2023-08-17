import React from "react";
import "./Personalfinancial.css";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import pfindexcircle from "../../assets/images/p-f-index-circle.png";
import PersonalBoxSlider from "./PersonalBoxSlider/PersonalBoxSlider";

import imgcircleforresponseive from "../../assets/images/imgcircleforresponseive.png";
const Personalfinancial = () => {
  return (
    <section className="personal--financiall--pages">
      <Container className="Personalfinancial">
        <Box className="row index----">
          <Box className="p--col left ">
            <h2 className="per--title">Personal Financial Index® ( PFI )</h2>
            <Box className="specil--btn">
              <button>Personal Financial</button>
              <button>Financial health</button>
              <button>Only 15 minutes</button>
            </Box>
            <p>
              Personal Financial Index® (PFI) is a comprehensive financial
              benchmark for individuals and families.
            </p>
            <p>
              In a few easy screens, it takes a 3600 view of your finances and
              allows you to measure and monitor your financial health via your
              personalized PFI score (similar to a credit score).
            </p>
            <p>
              We recommend using PFI in two ways: as a tool to see the impact of
              a major decision on your finances and for periodic reviews to make
              sure you are on track with your finances.
            </p>{" "}
            <p>
              Typically, a person can complete this in about 15 minutes.
              However, you need not complete it in one go as your information is
              automatically saved for future use.
            </p>
            <Box className="perosal--sec--btns">
              <button className="btn">
                <Link to="/">
                  Try For Free <ArrowForwardIcon />
                </Link>
              </button>
            </Box>
          </Box>
          <Box className="p--col right">
            <img
              src={pfindexcircle}
              alt="pfindexcircle"
              className="pfindexcircle"
            />
            <img
              src={imgcircleforresponseive}
              alt=""
              className="imgcircleforresponseive"
            />
          </Box>
        </Box>
      </Container>
      <Container className="how--its--work">
        <Box className="row personal--fin--box">
          <Box className="per--fin--box--col--left">
            <h5 className="titl--work">How it works</h5>
            <p>
              In a few easy screens, it takes a 3600 view of your finances and
              allows you to measure and monitor your financial health via your
              personalized PFI score (similar to a credit score).
            </p>
            <Link to="/" className="per--try--to--free">
              Try For Free
            </Link>
          </Box>

          <Box className="per--fin--box--col--right">
            <PersonalBoxSlider />
          </Box>
          <Box className="try--for--free--responsive">
            <button className="login--btn">
              <Link to="/"> Try For Free</Link>
            </button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Personalfinancial;
