import React from "react";
import "./KeysFiguresActions.css";
import { CircleProgress } from "react-gradient-progress";
import { Box } from "@mui/material";
import list from "../../assets/images/list.png";
const keysFiguresActions = () => {
  return (
    <>
      <Box className="key_figures_wrapper">
        <Box className="key_heading">
          <h2>key Figures & Actions</h2>
        </Box>
        <CircleProgress
          percentage={70}
          strokeWidth={25}
          secondaryColor=" #ECF5FF"
          primaryColor={["#3479FB", "#4EEEB3"]}
          width={250}
          hidePercentageText={false}
        />
        <Box className="lowe_section_key ">
          <Box className="lists_key">
            <h6>Budgeting:</h6>
          </Box>
          <Box className="lists_key">
            <p>
              <span>
                <img src={list} alt="" />
              </span>
              Net Worth:
            </p>
            <p className="amount">$2,750,00</p>
          </Box>
          <Box className="lists_key">
            <p>
              <span>
                <img src={list} alt="" />
              </span>
              Total Assets:
            </p>
            <p className="amount">$3,350,000</p>
          </Box>
          <Box className="lists_key lst_amount">
            <p>
              <span>
                <img src={list} alt="" />
              </span>
              Total Libilities:
            </p>
            <p className="amount ">$600,00</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default keysFiguresActions;
