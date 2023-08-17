import React from "react";
import "./PersonalDetails.css";
import { Container, Box } from "@mui/material";
import RadioComponent from "../radioComponent/RadioComponent";
import DropDownComponent from "../dropdownComponent/DropDownComponent";
import AbsButton from "../absButton/AbsButton";
import RangeSlider from "../rangeSlider/RangeSlider";
import { useState } from "react";

const PersonalDetails = ({ next }) => {
  const [personalValue, setPeronalValue] = useState([40]);
  const [martial, setMartial] = useState("");
  const [college, setCollege] = useState("");
  const [ownHome, setOwnHome] = useState("");
  const [addProperties, setAddProperties] = useState("");
  const [business, setBusiness] = useState("");
  const [majorPur, setMajorPur] = useState("");
  const [houseHold, setHouseHold] = useState(1);
  const [investment,setInvestment]=useState(1);
  const handleMartialStatus = (e) => {
    setMartial(e.target.value);
  };
  const handleInput=(e)=>{
    setPeronalValue(e.target.value)
  }
  const handleChange = (event, newValue) => {
    setPeronalValue(newValue);
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    next();
  };
  return (
    <>
      <section className="personal_detail_page">
        <Container maxWidth="lg" className="personal_det">
          <Box className="row personal_row_section">
            <Box className="personal_column_">
              <h4>Personal Financial Index &#174; (PFITM)</h4>
              <Box className="audio_section">
                <audio controls>
                  <source src="horse.ogg" type="audio/ogg" />
                  <source src="horse.mp3" type="audio/mpeg" />
                </audio>
              </Box>
            </Box>
          </Box>
          <Box className="row    ">
            <Box className="personal_detail_Sect_">
              <h6>Personal Details</h6>
            </Box>
          </Box>
          <Box className="personal_information ">
            <form>
              <Box className="detail_sectionss web_version">
                <Box className="info_left_sec">
                  <p>Age</p>
                </Box>
                <Box>
                  <RangeSlider
                    rangeValue={personalValue}
                    handleChange={handleChange}
                  />
                </Box>
                <Box className="third_section">
                  <Box className="value">
                  <p className="dollar">$</p>
                  <input value={personalValue} onChange={handleInput}/>
                 
                  </Box>
                </Box>
              </Box>
              <Box className="detail_sectionss mobile_version">
                <Box>
                <RangeSlider
                    rangeValue={personalValue}
                    handleChange={handleChange}
                  />
                  {/* <RangeSlider /> */}
                </Box>
                <Box className="third_section tab_version">
                  <Box className="info_left_sec">
                    <p>Age</p>
                  </Box>
                  <Box className="value">
                  <p className="dollar">$</p>
                  <input value={personalValue} onChange={(e)=>setPeronalValue(e.target.value)}/>

                  </Box>
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>Marital status</p>
                </Box>
                <Box>
                  <RadioComponent
                    label1="Single"
                    label2="Married"
                    value1="Single"
                    value2="Married"
                    handleRadioOption={handleMartialStatus}
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>
                    Plan to save for college <br /> education?
                  </p>
                </Box>
                <Box>
                  <RadioComponent
                    label1="Yes"
                    label2="No"
                    value1="Yes"
                    value2="No"
                    handleRadioOption={(e) => setCollege(e.target.value)}
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>Do you own a home?</p>
                </Box>
                <Box>
                  <RadioComponent
                    label1="Yes"
                    label2="No"
                    value1="Yes"
                    value2="No"
                    handleRadioOption={(e) => setOwnHome(e.target.value)}
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>Do you own a additional properties?</p>
                </Box>
                <Box>
                  <RadioComponent
                    label1="Yes"
                    label2="No"
                    value1="Yes"
                    handleRadioOption={(e) => setAddProperties(e.target.value)}
                    value2="No"
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>Do you own a business?</p>
                </Box>
                <Box>
                  <RadioComponent
                    label1="Yes"
                    label2="No"
                    value1="Yes"
                    handleRadioOption={(e) => setBusiness(e.target.value)}
                    value2="No"
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>
                    Plan to save for any <br /> major purchases?
                  </p>
                </Box>
                <Box>
                  <RadioComponent
                    label1="Yes"
                    label2="No"
                    value1="Yes"
                    handleRadioOption={(e) => setMajorPur(e.target.value)}
                    value2="No"
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>
                    Approx annual
                    <br /> household income?
                  </p>
                </Box>
                <Box className="drop_selection_wrapper">
                  <DropDownComponent
                   value={houseHold}
                   handleChange={(e) => setHouseHold(e.target.value)}
                    option1="Under $75 000"
                    option2="Between $75 000 and $150 000"
                    option3="Between $150 000 and $500 000"
                    option4="$500 000 and over"
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  <p>
                    Approx value of
                    <br /> investment
                  </p>
                </Box>
                <Box className="drop_selection_wrapper">
                  <DropDownComponent
                   value={investment}
                   handleChange={(e) => setInvestment(e.target.value)}
                    option1="Under $75 000"
                    option2="Between $75 000 and $150 000"
                    option3="Between $150 000 and $500 000"
                    option4="$500 000 and over"
                  />
                </Box>
              </Box>
              <Box className="detail_sectionss2">
                <Box className="info_left_sec2">
                  {/* <p>Approx value of<br/> investment</p> */}
                </Box>
                <Box className="drop_selection_wrapper">
                  <AbsButton
                    title="Next Page"
                    type="submit"
                    onClick={_handleSubmit}
                  />
                </Box>
              </Box>
            </form>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default PersonalDetails;
