import { Box } from "@mui/material";
import React from "react";
import assum01 from "../../../assets/images/assum--01.png";
import assum02 from "../../../assets/images/assum--02.png";
import assum03 from "../../../assets/images/assum--03.png";
import Slider from "react-slick";

const AssumSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <Box className="for--w">
          <Box className="assum--wrapper--item">
            <Box className="item--image">
              <img src={assum01} alt="" />
            </Box>
            <Box className="item--content">
              <p>
                Given the complexity behind federal and state income taxes, we
                have not considered the effect of income taxes on current
                retirement savings balances, contributions, and withdrawals
                during retirement. As a result, the required savings may be
                significantly different from when taxes are accounted for.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="for--w">
          <Box className="assum--wrapper--item">
            <Box className="item--image">
              <img src={assum02} alt="" />
            </Box>
            <Box className="item--content">
              <p>
                Investment rate of return remains same throughout the plan
                period. In reality, investment returns could fluctuate widely
                depending on the economic environment and market conditions.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="for--w">
          <Box className="assum--wrapper--item">
            <Box className="item--image">
              <img src={assum03} alt="" />
            </Box>
            <Box className="item--content">
              <p>
                Inflation rate remains same throughout the plan period. The
                inflation rate also varies from year to year depending on the
                economic environment.
              </p>
            </Box>
          </Box>
        </Box>
      </Slider>
    </>
  );
};

export default AssumSlider;
