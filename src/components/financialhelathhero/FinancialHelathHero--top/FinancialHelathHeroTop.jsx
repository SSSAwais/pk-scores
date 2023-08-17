import React from "react";
import printreporticon from "../../../assets/images/print-report-icon.png";
import FinancialCircleChart from "../../financialcirclechart/FinancialCircleChart";
import img2img from "../../../assets/images/hero---cicle.png";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FinancialHelathHeroTop.css";
const FinancialHelathHeroTop = () => {
  const [toggle, settoggle] = useState(false);
  const hanldeChnage = () => {
    settoggle(!toggle);
    console.log("About PFI");
  };
  return (
    <Container className="FinancialHelathHero--top" maxWidth="lg">
      <Box className="row">
        <Box className="health--hero--top--left">
          <Link to="/" className="back--link"> Back</Link>
          <h4 className="title">
            PFITM Score Details <br /> and Recommendations
            <div className="both--circle--for--responivse">
              <img src={img2img} alt="" />
            </div>
          </h4>
          <p>
            Check your proficiency in managing your personal finances. Personal
            Financial Index® (PFI) is a comprehensive financial benchmark for
            individuals and families.
          </p>

          <Box className="health--hero--sec--btns">
            <button className="btn l">
              <Link to=".">
                <img src={printreporticon} alt="printreporticon" />
                Print Report
              </Link>
            </button>
            {toggle ? (
              <Box className="aut--tag--health">
                <audio controls autoPlay onClick={hanldeChnage} />
              </Box>
            ) : (
              <button className="btn hero-health-pfi" onClick={hanldeChnage}>
                {/* <Link to="">About PFI</Link> */}
                About PFI
              </button>
            )}
            <Box className="hero-health-pfi--login--responsive">
              <button className="btn login--btn">
                <Link to="/form-detail">About PFI</Link>
              </button>
            </Box>
          </Box>
        </Box>
        <Box className="health--hero--top--right gra--dekotp">
          <FinancialCircleChart
            per={70}
            strWid={35}
            fillGradient={["#3479FB", "#4EEEB3"]}
            w={400}
            hid={true}
          />
          <Box className="circle--img">
            <img src={img2img} alt="" />
          </Box>
        </Box>
        <Box className="health--hero--top--right gra--tablet">
          <FinancialCircleChart
            per={70}
            strWid={25}
            fillGradient={["#3479FB", "#4EEEB3"]}
            w={300}
            hid={true}

          />
          <Box className="circle--img">
            <img src={img2img} alt="" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FinancialHelathHeroTop;
