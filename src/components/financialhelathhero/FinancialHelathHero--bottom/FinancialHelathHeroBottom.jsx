import React from "react";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import finincalhealth from "../../../assets/images/financial--health--pills.png";
import imgcircle from "../../../assets/images/health--title--circel4.png";
import { CircleProgress } from "react-gradient-progress";
import "./FinancialHelathHeroBottom.css";

const FinancialHelathHeroBottom = () => {
  return (
    <Container className="FinancialHelathHero--bottom" maxWidth="lg">
      <Box className="row">
        <Box className="health--hero--bottom--circle">
          <CircleProgress
            percentage={70}
            strokeWidth={25}
            secondaryColor="rgba(255, 255, 255, 0.1)"
            primaryColor={["#3479FB", "#4EEEB3"]}
            width={300}
            hidePercentageText={true}
          />
          <div className="hero--bottom--circle--content">
            <strong className="dircle--title">401 / 750</strong>
            <p className="dircle--disc">
              Your overall PFITM Score is 401 against a maximum possible score
              of 750.
            </p>
          </div>
        </Box>
        <Box className="health--hero--bottom--left">
          <img src={imgcircle} className="img--circle--health" alt="" />
          <img src={finincalhealth} alt="finincalhealth" />
        </Box>
        <Box className="health--hero--bottom--right">
          <h2 className="tiitle">Details of your PFI score and gap analysis</h2>
          <p>
            To see the details of your PFI score and financial gap analysis,
            <Link to="/"> click here</Link> <br /> <br />
            For a sample report,
            <Link to="/"> click here</Link> .
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default FinancialHelathHeroBottom;
