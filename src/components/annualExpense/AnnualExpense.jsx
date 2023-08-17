import { Box } from "@material-ui/core";
import React from "react";
import "./AnnualExpense.css";
import annualReport from "../../assets/images/annualReport.png";
import { useSelector } from "react-redux";
import AnnualDonutChart from "./AnnualDonutChart/AnnualDonutChart";

const AnnualExpense = () => {
  const {
    //   LivingExpenses
    lifeExp,
    travelExp,
    healthExp,

    // OtherExpenses
    loanOther,
    monthlyOther,

    // PropertyRelatedExpenses
    PhomeMaint,
    PhomeMortage,
    PpropertyTax,
  } = useSelector((state) => state.rootReducer);

  let LivingExpenses = lifeExp + travelExp + healthExp;
  let OtherExpenses = loanOther + monthlyOther;
  let PropertyRelatedExpenses = PhomeMaint + PhomeMortage + PpropertyTax;

  let totalExpense = LivingExpenses + OtherExpenses + PropertyRelatedExpenses;

  let PercentageLivingExpenses = Math.ceil(
    (100 * LivingExpenses) / totalExpense
  );
  let PercentageOtherExpenses = Math.ceil((100 * OtherExpenses) / totalExpense);
  let PercentagePropertyRelatedExpenses = Math.ceil(
    (100 * PropertyRelatedExpenses) / totalExpense
  );

  const convertToDoller = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <>
      <Box className="annual_wrapper">
        <Box className="content_section">
          <Box className="annual_left_heading">
            <p>Living Expenses</p>
            <h6>
              {convertToDoller(LivingExpenses)}
              <br />
            </h6>
          </Box>
          <Box className="annual_right_heading">
            <p>Other Expenses</p>
            <h6>
              {convertToDoller(OtherExpenses)} <br />
            </h6>
          </Box>
        </Box>
        <Box className="image_wrapper_annual">
          <AnnualDonutChart
            livExp={PercentageLivingExpenses}
            othExpt={PercentageOtherExpenses}
            othRelExp={PercentagePropertyRelatedExpenses}
          />
        </Box>
        <Box className="annual_third_heading">
          <p>Property Related Expenses</p>
          <h6>
            {convertToDoller(PropertyRelatedExpenses)}
            <br />
          </h6>
        </Box>
      </Box>
    </>
  );
};

export default AnnualExpense;
