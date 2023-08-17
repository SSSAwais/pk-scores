import React from "react";
import { Box } from "@mui/material";
import "./PersonalBoxSlider.css";
import Slider from "react-slick";

import img1 from "../../../assets/images/work--img--1.png";
import img2 from "../../../assets/images/work--img--2.png";
import img3 from "../../../assets/images/work--img--3.png";
const PersonalBoxSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    rtl: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="PersonalBoxSlider--wrapper">
      <Box className="PersonalBoxSlider">
        <div className="per--img--box">
          <img src={img1} alt="" />
        </div>
        <p>
          You fill in your personal details. This information is used to
          personalize the experience for you.
        </p>
      </Box>
      <Box className="PersonalBoxSlider">
        <div className="per--img--box">
          <img src={img2} alt="" />
        </div>
        <p>
          You go through 6 steps to create a Personal Financial Index® (PFI TM )
          where you give us all the details in detail.
        </p>
      </Box>{" "}
      <Box className="PersonalBoxSlider">
        <div className="per--img--box">
          <img src={img3} alt="" />
        </div>

        <p>
          You get detailed information about your PFI score and gap analysis and
          can print a print report.
        </p>
      </Box>
    </Slider>
  );
};

export default PersonalBoxSlider;
