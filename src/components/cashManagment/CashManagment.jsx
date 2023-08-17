import React, { useEffect } from "react";
import "./CashManagment.css";
import BubbleChart from "../bubbleChartComponent/BubbleChartComponent";
import { Container, Box, Tooltip } from "@mui/material";
import PersonalFinancialIndex from "../personalFinancialIndex/PersonalFinancialIndex";
import RadioComponent from "../radioComponent/RadioComponent";
import RangeSlider from "../rangeSlider/RangeSlider";
import question from "../../assets/images/question.png";
// import chart from "../../assets/images/chart.png";
// import mobchart from "../../assets/images/chartMob.png";
import chart from "../../assets/images/annull--buble--desk.png";
import mobchart from "../../assets/images/annull--buble--mobile.png";
import PrevBUtton from "../prevButton/PrevBUtton";
import AbsButton from "../../components/absButton/AbsButton";

import { useState } from "react";
import RangeSliderGR from "../rangesliderGR/RangeSliderGR";
import { useDispatch, useSelector } from "react-redux";
const CashManagment = ({ next, pre }) => {
  const size = { width: window.innerWidth, height: window.innerHeight };
  const bubbleClick = (label) => {
    console.log("Custom bubble click func");
  };
  const legendClick = (label) => {
    console.log("Customer legend click func");
  };
  console.log(window.screen, "screen");
  const datafromreducer = useSelector((state) => state.rootReducer);
  const funcitonsformreducer = useDispatch();

  const [salary, setSalary] = useState([5000]);
  const [rental, setRental] = useState([5000]);
  const [incomes, setIncomes] = useState([0]);
  const [homeMortage, setHomeMortage] = useState([500000]);
  const [propTax, setPropTax] = useState([5000]);
  const [homeMort, setHomeMort] = useState([5000]);
  const [homeMaint, setHomeMaint] = useState([2000]);
  const [lifeExp, setLifeExp] = useState([12000]);
  const [healthInsurance, setHealthInsurance] = useState([2000]);
  const [travel, setTravel] = useState([0]);
  const [taxesProperty, setTaxesProperty] = useState([100000]);
  const [monthlyValue, setMonthlyValue] = useState([0]);


  const [bonus, setBonus] = useState("");
  const [rentalOption, setRentalOption] = useState("");
  const [mortageOption1, setMortageOption1] = useState("");
  const [mortageOption2, setMortageOption2] = useState("");
  const [homeMaintaince, setHomeMaintaince] = useState("");
  const [paymentDebt1, setPaymentDebt1] = useState("");
  const [paymentDebt2, setPaymentDebt2] = useState("");
  const [food, setFood] = useState("");
  const [healtPayment, setHealtPayment] = useState("");
  const [traveEnt, setTravelEnt] = useState("");


  const [width,setWidth]=useState(300);
  const [height,setHeight]=useState(600);

  useEffect(() => {
    const wrapper =  document.querySelector(".bubble_chart_wrapepr")
    // setWidth(wrapper_width);
    // setHeight(wrapper_height)
    setWidth(wrapper.getBoundingClientRect().width)
    setHeight(wrapper.getBoundingClientRect().height)
  }, [])
  

  const handleChangeSalary = (value) => {
    funcitonsformreducer({
      type: "SALARY",
      payload: value,
    });
  };
  const handleChangeRental = (value) => {
    funcitonsformreducer({
      type: "RENTAL",
      payload: value,
    });
  };

  const hanldeChangeIncome = (value) => {
    funcitonsformreducer({
      type: "OTHERINCOME",
      payload: value,
    });
  };

  const hanldeChangeHomeMortgeAge = (value) => {
    funcitonsformreducer({
      type: "HOMEMORTGEAGEPAYMENT",
      payload: value,
    });
  };

  const hanldeChangePopertyTexs = (value) => {
    funcitonsformreducer({
      type: "POPERTYTEXS",
      payload: value,
    });
  };
  const hanldeChangeHomeMant = (value) => {
    funcitonsformreducer({
      type: "HOMEMAINT",
      payload: value,
    });
  };

  const hanldeChangeLifeExp = (value) => {
    funcitonsformreducer({
      type: "LIFEEXP",
      payload: value,
    });
  };

  const hanldeChangeHealth = (value) => {
    funcitonsformreducer({
      type: "HEALTHEXP",
      payload: value,
    });
  };

  const hanldeChangeTravel = (value) => {
    funcitonsformreducer({
      type: "TRAVELEXP",
      payload: value,
    });
  };

  const hanldeChangeLoadOther = (value) => {
    funcitonsformreducer({
      type: "LOANOTHER",
      payload: value,
    });
  };

  const hanldeChangeMonthlyOther = (value) => {
    funcitonsformreducer({
      type: "MONTHLYOTHER",
      payload: value,
    });
  };

  //  dyanmic number with dolller sign funtion
  const currnyDyamic = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  };

  const inputOnchange = (value, type) => {
    funcitonsformreducer({
      type: type,
      payload: value,
    });
  };

  // // complete
  // const _handleSalary = (event, newValue) => {
  //   setSalary(newValue);
  // };
  // const _handleRental = (event, newValue) => {
  //   setRental(newValue);
  // };
  // const handleIncome = (event, newValue) => {
  //   setIncomes(newValue);
  // };
  // const handleHomeMor = (event, newValue) => {
  //   setHomeMortage(newValue);
  // };
  // const handlePorpTax = (event, newValue) => {
  //   setPropTax(newValue);
  // };
  // const handleHomeMOrtage = (event, newValue) => {
  //   setHomeMort(newValue);
  // };
  // const handleHomeMaint = (event, newValue) => {
  //   setHomeMaint(newValue);
  // };
  // const handleLifeExp = (event, newValue) => {
  //   setLifeExp(newValue);
  // };
  // const handleHealthInsurance = (event, newValue) => {
  //   setHealthInsurance(newValue);
  // };
  // const handleTravel = (event, newValue) => {
  //   setTravel(newValue);
  // };

  // const handleTaxesProperty = (event, newValue) => {
  //   setTaxesProperty(newValue);
  // };
  // const handleMonthlyValue = (event, newValue) => {
  //   setMonthlyValue(newValue);
  // };
  const _handleNextPage = (e) => {
    e.preventDefault();
    next();
  };
  const _handleprev = (e) => {
    e.preventDefault();
    pre();
  };
  const handleCashManagement = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="cash_managment">
        <Container maxWidth="lg" className="cash_contain">
          <PersonalFinancialIndex />
          <Box className="row cash_manag">
            <Box className="cash_managment_sect">
              <h6>Step 2:Your Cash-Managment</h6>
            </Box>
          </Box>
          <Box className="row cash_manag2">
            <Box className="cash_managment_sect">
              <h6>Income</h6>
            </Box>
          </Box>
          <Box className="cash_management_form">
            <form onSubmit={handleCashManagement}>
              {/* income section web view start here */}

              <Box className="mortage_wrapper web_view_mortage web_view_mortage33">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p>Salary and bonus (pre-tax)?</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) => setBonus(e.target.value)}
                      />
                    </Box>
                    <Box className="range_inputs">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.INsalary}
                          onChange={(e) =>
                            inputOnchange(e.target.value, "SALARY")
                          }
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "SALARY",
                          //     payload: e.target.value,
                          //   })
                          // }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  <RangeSliderGR
                    max={1000000}
                    min={1000}
                    val={datafromreducer.INsalary}
                    handleOnChange={handleChangeSalary}
                  />
                </Box>
                <Box className="radio_mobi">
                  <RadioComponent
                    label1="Monthly"
                    label2="Annual"
                    value1="Monthly"
                    value2="Annual"
                    handleRadioOption={(e) => setBonus(e.target.value)}
                  />
                </Box>
              </Box>
              <Box className="mortage_wrapper web_view_mortage">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p>Rental income</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) =>
                          setRentalOption(e.target.value)
                        }
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.INrental}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "RENTAL",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "RENTAL")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  {/* <RangeSlider

handleChange={_handleRental}
                  /> */}
                  <RangeSliderGR
                    max={10000000}
                    min={500000}
                    val={datafromreducer.INrental}
                    handleOnChange={handleChangeRental}
                  />
                </Box>
                <Box className="radio_mobi">
                  <RadioComponent
                    label1="Monthly"
                    label2="Annual"
                    value1="Monthly"
                    value2="Annual"
                    handleRadioOption={(e) => setRentalOption(e.target.value)}
                  />
                </Box>
              </Box>
              <Box className="other_income web_view_mortage">
                <Box className="other_income_top">
                  <Box className="other_income_left">
                    <p>Any other income(desc.)</p>
                  </Box>
                  <p className="total_annual_value">
                    Total annual value from these source
                  </p>
                </Box>
              </Box>

              <Box className="income_second_section web_view_mortage">
                <Box className="income_left_sec">
                  <Box className="para_income">
                    <p>
                      Your text here. This may include Social Security benefits,
                      pensions, income from a trust, etc.{" "}
                    </p>
                  </Box>
                </Box>

                <Box className="right_section_cash income_mobile_css">
                  <Box className="income_range">
                    {/* <RangeSlider
                      rangeValue={incomes}
                      handleChange={handleIncome}
                    /> */}
                    <RangeSliderGR
                      max={100}
                      min={0}
                      val={datafromreducer.INotherncomes}
                      handleOnChange={hanldeChangeIncome}
                    />
                  </Box>

                  <Box className="">
                    <Box className="value">
                      <p className="dollar">$</p>
                      <input
                        value={datafromreducer.INotherncomes}
                        // onChange={(e) =>
                        //   funcitonsformreducer({
                        //     type: "OTHERINCOME",
                        //     payload: e.target.value,
                        //   })
                        // }
                        onChange={(e) =>
                          inputOnchange(e.target.value, "OTHERINCOME")
                        }
                      />
                    </Box>
                  </Box>
                  <Box className="income_range_mobile ">
                    {/* <RangeSlider
                      rangeValue={incomes}
                      handleChange={handleIncome}
                    /> */}
                    <RangeSliderGR
                      max={100}
                      min={0}
                      val={datafromreducer.INotherncomes}
                      handleOnChange={hanldeChangeIncome}
                    />
                  </Box>
                </Box>
              </Box>

              {/* income section web view ends here */}

              {/*property related expenses web view starts  here*/}
              <Box className="row cash_manag web_view_mortage">
                <Box className="cash_managment_sect">
                  <h6 className="ongoing_expense">
                    Ongoing Expenses (Estimates)
                    <Tooltip title="On going Exp">
                      <span className="tooltip">
                        <img src={question} alt="" />
                      </span>
                    </Tooltip>
                  </h6>
                </Box>
              </Box>
              <Box className="row cash_manag2 web_view_mortage">
                <Box className="cash_managment_sect">
                  <h6>Property Related Expenses:</h6>
                </Box>
              </Box>
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p className="mortage_para">
                      Home mortgage payment
                      <Tooltip title="Home Mortage">
                        <span>
                          <img src={question} alt="" />
                        </span>
                      </Tooltip>
                    </p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) =>
                          setMortageOption1(e.target.value)
                        }
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.PhomeMortage}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "HOMEMORTGEAGEPAYMENT",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(
                              e.target.value,
                              "HOMEMORTGEAGEPAYMENT"
                            )
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  {/* <RangeSlider
                    rangeValue={homeMortage}
                    handleChange={handleHomeMor}
                  /> */}
                  <RangeSliderGR
                    max={1000000}
                    min={1000}
                    val={datafromreducer.PhomeMortage}
                    handleOnChange={hanldeChangeHomeMortgeAge}
                  />
                  {/* <RangeSliderGR  val={datafromreducer.PhomeMortage} val, handleOnChange, min, max /> */}
                </Box>
                <Box className="mobile_radio_view ">
                  <RadioComponent
                    label1="Monthly"
                    label2="Annual"
                    value1="Monthly"
                    value="Annual"
                    handleRadioOption={(e) => setMortageOption1(e.target.value)}
                  />
                </Box>
              </Box>
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec3">
                    <p>Property taxes (annual)</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage property_ranger_slider">
                      {/* <RangeSlider
                        rangeValue={propTax}
                        handleChange={handlePorpTax}
                      /> */}
                      <RangeSliderGR
                        max={100}
                        min={0}
                        val={datafromreducer.PpropertyTax}
                        handleOnChange={hanldeChangePopertyTexs}
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.PpropertyTax}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "POPERTYTEXS",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "POPERTYTEXS")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="mobile_radio_view">
                  <RangeSliderGR
                    max={100}
                    min={0}
                    val={datafromreducer.PpropertyTax}
                    handleOnChange={hanldeChangePopertyTexs}
                  />
                </Box>
              </Box>
              {/* 
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p className="mortage_para">
                      Home mortgage payment
                      <Tooltip title="Home Mortage">
                        <span>
                          <img src={question} alt="" />
                        </span>
                      </Tooltip>
                    </p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) =>
                          setMortageOption2(e.target.value)
                        }
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={homeMort}
                          onChange={(e) => setHomeMort(e.target.value)}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  <RangeSlider
                    rangeValue={homeMort}
                    handleChange={handleHomeMOrtage}
                  />
                </Box>
                <Box className="mobile_radio_view">
                  <RadioComponent label1="Monthly" label2="Annual" />
                </Box>
              </Box> */}
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p>Other expenses (Home maint.)</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) =>
                          setHomeMaintaince(e.target.value)
                        }
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.PhomeMaint}
                          onChange={(e) =>
                            inputOnchange(e.target.value, "HOMEMAINT")
                          }
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "HOMEMAINT",
                          //     payload: e.target.value,
                          //   })
                          // }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  {/* <RangeSlider
                    rangeValue={homeMaint}
                    handleChange={handleHomeMaint}
                  /> */}

                  <RangeSliderGR
                    max={4000}
                    min={0}
                    val={datafromreducer.PhomeMaint}
                    handleOnChange={hanldeChangeHomeMant}
                  />
                </Box>
                <Box className="mobile_radio_view">
                  <RadioComponent label1="Monthly" label2="Annual" />
                </Box>
              </Box>

              <Box className="mortage_wrapper web_view debt_modes">
                <Box className="home_mortage_section mobile_debt_class">
                  <Box className="info_left_sec modes_left_section_debt">
                    <p>
                      Do you always make timely <br /> payment on debt?
                    </p>
                  </Box>
                  <Box className="right_section_cash mobile_debt_modes__">
                    <Box className="debt_modes_">
                      <RadioComponent
                        label1="Yes"
                        label2="Mosttimes"
                        value1="Yes"
                        value2="Mosttimes"
                        handleRadioOption={(e) =>
                          setPaymentDebt1(e.target.value)
                        }
                      />
                      <RadioComponent
                        label1="No"
                        label2="Sometimes"
                        value1="No"
                        value2="Sometimes"
                        handleRadioOption={(e) =>
                          setPaymentDebt2(e.target.value)
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/*property related expenses    

              {/* living expenses starts here */}

              <Box className="row cash_manag">
                <Box className="cash_managment_sect">
                  <h6>Living Expenses:</h6>
                </Box>
              </Box>

              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p>Life Exp.(food,clothes,utli...)</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortageb radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) => setFood(e.target.value)}
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.lifeExp}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "LIFEEXP",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "LIFEEXP")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  {/* <RangeSlider
                    rangeValue={lifeExp}
                    handleChange={handleLifeExp}
                  /> */}
                  <RangeSliderGR
                    max={24000}
                    min={200}
                    val={datafromreducer.lifeExp}
                    handleOnChange={hanldeChangeLifeExp}
                  />
                </Box>
                <Box className="mobile_radio_view">
                  <RadioComponent label1="Monthly" label2="Annual" />
                </Box>
              </Box>
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p>Health insurance payment</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) =>
                          setHealtPayment(e.target.value)
                        }
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.healthExp}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "HEALTHEXP",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "HEALTHEXP")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  {/* <RangeSlider
                    rangeValue={healthInsurance}
                    handleChange={handleHealthInsurance}
                  /> */}
                  <RangeSliderGR
                    max={4000}
                    min={100}
                    val={datafromreducer.healthExp}
                    handleOnChange={hanldeChangeHealth}
                  />
                </Box>
                <Box className="mobile_radio_view">
                  <RadioComponent label1="Monthly" label2="Annual" />
                </Box>
              </Box>

              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec">
                    <p>Travel & entertainment</p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage radio_web">
                      <RadioComponent
                        label1="Monthly"
                        label2="Annual"
                        value1="Monthly"
                        value2="Annual"
                        handleRadioOption={(e) => setTravelEnt(e.target.value)}
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.travelExp}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "TRAVELEXP",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "TRAVELEXP")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="slider_range_cash">
                  {/* <RangeSlider
                    rangeValue={travel}
                    handleChange={handleTravel}
                  /> */}
                  <RangeSliderGR
                    max={800}
                    min={0}
                    val={datafromreducer.travelExp}
                    handleOnChange={hanldeChangeTravel}
                  />
                </Box>
                <Box className="mobile_radio_view">
                  <RadioComponent label1="Monthly" label2="Annual" />
                </Box>
              </Box>

              {/* living expenses ends here */}

              {/* other expenses section starts here */}
              <Box className="row cash_manag">
                <Box className="cash_managment_sect">
                  <h6>Other Expenses:</h6>
                </Box>
              </Box>
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec3">
                    <p>
                      Loan balance on <br /> cars & other major items
                    </p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage loan_range_slifder">
                      {/* <RangeSlider
                        rangeValue={taxesProperty}
                        handleChange={handleTaxesProperty}
                      /> */}
                      <RangeSliderGR
                        max={10000}
                        min={100}
                        val={datafromreducer.loanOther}
                        handleOnChange={hanldeChangeLoadOther}
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.loanOther}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "LOANOTHER",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "LOANOTHER")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="mobile_radio_view">
                  <RangeSliderGR
                    max={100000}
                    min={1000}
                    val={datafromreducer.loanOther}
                    handleOnChange={hanldeChangeLoadOther}
                  />
                </Box>
              </Box>
              <Box className="mortage_wrapper web_view">
                <Box className="home_mortage_section">
                  <Box className="info_left_sec3">
                    <p>
                      Any other monthly payments <br /> (Monthly value)
                    </p>
                  </Box>
                  <Box className="right_section_cash">
                    <Box className="web_view_mortage monthly_payments ">
                      {/* <RangeSlider
                        rangeValue={monthlyValue}
                        handleChange={handleMonthlyValue}
                      /> */}
                      <RangeSliderGR
                        max={10000}
                        min={0}
                        val={datafromreducer.monthlyOther}
                        handleOnChange={hanldeChangeMonthlyOther}
                      />
                    </Box>
                    <Box className="">
                      <Box className="value">
                        <p className="dollar">$</p>
                        <input
                          value={datafromreducer.monthlyOther}
                          // onChange={(e) =>
                          //   funcitonsformreducer({
                          //     type: "MONTHLYOTHER",
                          //     payload: e.target.value,
                          //   })
                          // }
                          onChange={(e) =>
                            inputOnchange(e.target.value, "MONTHLYOTHER")
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="mobile_radio_view">
                  <RangeSliderGR
                    max={10000}
                    min={0}
                    val={datafromreducer.monthlyOther}
                    handleOnChange={hanldeChangeMonthlyOther}
                  />
                </Box>
              </Box>

              <Box className="textarea_section">
                <textarea
                  minrows={5}
                  rows={4}
                  className="text_area_section"
                  placeholder="Your text here"
                />
              </Box>
              {/* other expenses section ends here */}

              {/* chart for annual expenses starts here */}
              <Box className="row cash_manag">
                <Box className="cash_managment_sect">
                  <h6>Chart for Annual Expenses</h6>
                </Box>
              </Box>
              <Box className="bubble_chart_wrapepr">
                <BubbleChart
                  graph={{
                    zoom: 0.7,
                  }}
                  width={width}
                  height={height}
                  padding={20} // optional value, number that set the padding between bubbles
                  showLegend={false} // optional value, pass false to disable the legend.
                  //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                  bubbleClickFunc={bubbleClick()}
                  legendClickFun={legendClick()}
                  data={[
                    {
                      label: "Taxes",
                      value: Number(datafromreducer.PpropertyTax),
                    },
                    {
                      label: "Home Mortgage",
                      value: Number(datafromreducer.PhomeMortage),
                    },
                    {
                      label: "Home Upkeeping",
                      value: Number(datafromreducer.monthlyOther),
                    },
                    {
                      label: "Health Insurance",
                      value: Number(datafromreducer.healthExp),
                    },
                    {
                      label: "Auto Loan",
                      value: Number(datafromreducer.loanOther),
                    },
                    // { label: "Other Payments", value: 100000 },
                    // { label: "Travel", value: 30000 },
                    {
                      label: "Life Exp. (food, clothes, util...)",
                      value: Number(datafromreducer.lifeExp),
                    },
                  ]}
                />
              </Box>
              {/* <Box className="chart_img">
                <Box className="chart_tax">
                  <p>Taxes</p>
                  <p>{currnyDyamic(datafromreducer.PpropertyTax)}</p>
                </Box>
                <Box className="home_mortage_chart ">
                  <p>Home mortgage</p>
                  <p>{currnyDyamic(datafromreducer.PhomeMortage)}</p>
                </Box>
                <Box className="life_exp_chart ">
                  <p>Life Exp,(Food,clothes,utils...)</p>
                  <p>{currnyDyamic(datafromreducer.lifeExp)}</p>
                </Box>
                <Box className="auto_loan_chart ">
                  <p>Auto Loan</p>
                  <p> {currnyDyamic(datafromreducer.loanOther)}</p>
                </Box>
                <Box className="health_ins_chart ">
                  <p>Health ins.</p>
                  <p> {currnyDyamic(datafromreducer.healthExp)} </p>
                </Box>
                <Box className="homeunkeeping_chart ">
                  <p>Home unKeeping</p>
                  <p> {currnyDyamic(datafromreducer.monthlyOther)} </p>
                </Box>
                <img src={chart} alt="" className="img-fluid" />
              </Box> */}

              {/*  for mobile  */}
              {/* <Box className="chart_mobile">
                <Box className="homeunkeeping_chart ">
                  <p>Home unKeeping</p>
                  <p> {currnyDyamic(datafromreducer.monthlyOther)} </p>
                </Box>
                <Box className="home_mortage_chart ">
                  <p>Home mortgage</p>
                  <p>{currnyDyamic(datafromreducer.PhomeMortage)}</p>
                </Box>
                <Box className="life_exp_chart ">
                  <p>Life Exp,(Food,clothes,utils...)</p>
                  <p>{currnyDyamic(datafromreducer.lifeExp)}</p>
                </Box>
                <Box className="chart_taxs">
                  <p>Taxes</p>
                  <p>{currnyDyamic(datafromreducer.PpropertyTax)}</p>
                </Box>
                <Box className="auto_loan_charts ">
                  <p>Auto Loan</p>
                  <p> {currnyDyamic(datafromreducer.loanOther)}</p>
                </Box>
                <Box className="health_ins_charts ">
                  <p>Health ins.</p>
                  <p> {currnyDyamic(datafromreducer.healthExp)} </p>
                </Box>
                <img src={mobchart} alt="" />
              </Box> */}

              {/* chart for annual expenses ends here */}
              <Box className="buttons_section">
                <PrevBUtton prev_name="Previews" onClick={_handleprev} />
                <AbsButton title="Next Page" onClick={_handleNextPage} />
              </Box>
            </form>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default CashManagment;
