import React, { useState } from "react";
import CashManagment from "../cashManagment/CashManagment";
import PersonalDetails from "../personalDetails/PersonalDetails";
import KeysFiguresActions from "../../components/keysFiguresActions/KeysFiguresActions";
import AnnualExpense from "../../components/annualExpense/AnnualExpense";
import "./Steppers.css";
import { Stepper, Step, StepLabel, Container, Grid } from "@material-ui/core";
import Dummy from "../DummyComponent/Dummy";
const Stepper01 = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handlePrev = (value) => {
    setCheck(value);
  };
  const handleCheck = (value) => {
    console.log("handleCheck Function called", value);
    setCheck(value);
  };

  const [check, setCheck] = useState(0);
  return (
    <>
      <Container maxWidth="lg" className="step_container">
        <Grid container>
          <Grid item lg={4} md={4} sm={12}>
            <Stepper
              style={{ color: "#F1F3F4" }}
              orientation="vertical"
              activeStep={check}
              className="stepper_main"
            >
              <Step>
                <StepLabel onClick={() => setCheck(0)} className="step_label">
                  Personal Details
                </StepLabel>
              </Step>
              <Step>
                <StepLabel onClick={() => setCheck(1)} className="step_label">
                  Net Worth
                </StepLabel>
              </Step>
              <Step>
                <StepLabel className="step_label" onClick={() => setCheck(2)}>
                  Cash Management
                </StepLabel>
              </Step>
              <Step>
                <StepLabel className="step_label" onClick={() => setCheck(3)}>
                  Retirement
                </StepLabel>
              </Step>
              <Step>
                <StepLabel className="step_label" onClick={() => setCheck(4)}>
                  Major Purchases
                </StepLabel>
              </Step>
              <Step>
                <StepLabel className="step_label" onClick={() => setCheck(5)}>
                  Dependent Protection
                </StepLabel>
              </Step>
              <Step>
                <StepLabel
                  className="step_label"
                  completed={false}
                  onClick={() => setCheck(6)}
                >
                  Financial Health / PFI Score
                </StepLabel>
              </Step>
              <KeysFiguresActions />
              <AnnualExpense />
            </Stepper>
          </Grid>
          <Grid item lg={8} md={8} sm={12}>
            <div>
              {(() => {
                switch (check) {
                  case 0:
                    return <PersonalDetails next={() => handleCheck(1)} />;

                  case 1:
                    return (
                      <Dummy
                        text="Net"
                        next={() => handleCheck(2)}
                        pre={() => handlePrev(0)}
                      />
                    );
                  case 2:
                    return (
                      <CashManagment
                        next={() => handleCheck(3)}
                        pre={() => handlePrev(1)}
                      />
                    );
                  case 3:
                    return (
                      <Dummy
                        text="Retirement"
                        next={() => handleCheck(4)}
                        pre={() => handlePrev(2)}
                      />
                    );
                  case 4:
                    return (
                      <Dummy
                        text="Major Purchases"
                        next={() => handleCheck(5)}
                        pre={() => handlePrev(3)}
                      />
                    );
                  case 5:
                    return (
                      <Dummy
                        text="Dependent Protection"
                        next={() => handleCheck(6)}
                        pre={() => handlePrev(4)}
                      />
                    );
                  case 6:
                    return (
                      <Dummy
                        text="Financial Health / PFI Score"
                        pre={() => handlePrev(5)}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Stepper01;
