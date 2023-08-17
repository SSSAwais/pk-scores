import React from "react";
import "./FinancialCircleChart.css";
import { CircleProgress } from "react-gradient-progress";
const FinancialCircleChart = ({ per, strWid, w, fillGradient, hid }) => {
  return (
    <>
      <div className="CircleProgress ">
        <div className="cirlce--pro">
          <CircleProgress
            percentage={per}
            strokeWidth={strWid}
            secondaryColor="#fff"
            primaryColor={fillGradient}
            width={w}
            hidePercentageText={hid}
          />
        </div>
        <div className="CircleProgress--content">
          <strong className="dircle--title">401 / 750</strong>
          <p className="dircle--disc">
            Your overall PFITM Score is 401 against a maximum possible score of
            750.
          </p>
        </div>
      </div>
    </>
  );
};

export default FinancialCircleChart;
