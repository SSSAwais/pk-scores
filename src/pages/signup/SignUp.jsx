import React, { useState } from "react";
import "./SignUp.css";
import "../../assets/css/style.css";
import { Container, Box, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AbsInput from "../../components/absInput/AbsInput";
import DropDown from "../../components/dropdown/DropDown";
import signUpLogo from "../../assets/images/signupLogo.png";
import pills from "../../assets/images/pills.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import fax from "../../assets/images/fax.png";
const SignUp = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    number: "",
    email: "",
    password: "",
    confrimPass: "",
    zip: "",
    question1: "",
    question2: "",
  });
  function handle(e) {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
    console.log(newData);
  }
  const _handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(formData, "form data");
  };
  return (
    <>
      <section className="sign_up_main_wrapepr">
        <Container maxWidth="lg">
          <Box className="row">
            <Box className="left_section_sign">
              <Box className="signup__wrapper_left_section">
                <Box className="signup_heading">
                  <h2>Signup for personal Financial Index &reg;</h2>
                </Box>
                <form onSubmit={_handleSubmitForm}>
                  <Box className="sigup_form">
                    <AbsInput
                      placeholder="First Name"
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={(e) => handle(e)}
                    />
                    <AbsInput
                      placeholder="Last Name"
                      type="text"
                      name="lname"
                      value={formData.lname}
                      onChange={(e) => handle(e)}
                    />
                    <AbsInput
                      placeholder="Phone Number"
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={(e) => handle(e)}
                    />
                    <AbsInput
                      placeholder="Email addres"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handle(e)}
                    />
                    <AbsInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={(e) => handle(e)}
                    />
                    <AbsInput
                      placeholder="Confirm Password"
                      type="password"
                      name="confrimPass"
                      value={formData.confrimPass}
                      onChange={(e) => handle(e)}
                    />
                    <AbsInput
                      placeholder="Zip"
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={(e) => handle(e)}
                    />
                    <DropDown title1="Security Question 1" />
                    <AbsInput
                      placeholder="Answer"
                      type="text"
                      name="question1"
                      value={formData.question1}
                      onChange={(e) => handle(e)}
                    />
                    <DropDown title1="Security Question 2" />
                    <AbsInput
                      placeholder="Answer"
                      type="text"
                      name="question2"
                      value={formData.question2}
                      onChange={(e) => handle(e)}
                    />
                    <Box className="checkBox_signup">
                      <Checkbox {...label} />
                      <h6>Remember Me</h6>
                    </Box>
                    <Box className="buttons_section">
                      <Button className="sign_up_button" type="submit">
                        Sign Up{" "}
                        <span className="arrow_icon">
                          <ArrowForwardIcon />
                        </span>
                      </Button>
                      <p>or</p>
                      <Box className="social_button">
                        <Button variant="outlined">Facebook</Button>
                        <Button variant="outlined">LinkedIn</Button>
                        <Button variant="outlined">Twitter</Button>
                      </Box>
                    </Box>
                    <Box className="already_member">
                      <Box className="top_">
                        <p>Already a member?</p>
                        <Link href="#">Log In</Link>
                      </Box>
                      <Box className="bottom_">
                        <p>Didn't receiver account activation Email?</p>
                        <Link href="#">Resend Email</Link>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
            <Box className="right_section_signUp ">
              <Box className="prscrore_sign_ip">
                <Link to="/">
                  <img src={signUpLogo} alt="logo" />
                </Link>
                <img src={pills} alt="pills" className="pills" />
              </Box>
              <Box className="tech_support_section">
                <Box className="tech_heading ">
                  <Box className="tech_inner_values">
                    <span className="dots__"></span>
                    <h4>Techinical Support</h4>
                  </Box>
                  <p>For fast service,use online chat.</p>
                </Box>
                <Box className="contact__signup">
                  <Box className="email">
                    <Box className="email_img">
                      <img src={email} alt="email" className="" />
                    </Box>
                    <Box className="email_texts">
                      <h6>Email:</h6>
                      <h2>support@gowealthpro.com</h2>
                    </Box>
                  </Box>
                  <Box className="email">
                    <Box className="email_img">
                      <img src={phone} alt="email" className="" />
                    </Box>
                    <Box className="email_texts">
                      <h6>phone:</h6>
                      <h2>(781)366-0060</h2>
                    </Box>
                  </Box>
                </Box>
                <Box className="contact__signup2 ">
                  <Box className="email">
                    <Box className="email_img">
                      <img src={fax} alt="email" className="" />
                    </Box>
                    <Box className="email_texts">
                      <h6>Fax:</h6>
                      <h2>(866)373-0895</h2>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="lg" className="mobile_view_sign_ip">
          <Box className="mobil_section_waves">
            <Box className="tech_support_section2">
              <Box className="tech_heading ">
                <Box className="tech_inner_values">
                  <span className="dots__"></span>
                  <h4>Techinical Support</h4>
                </Box>
                <p>For fast service,use online chat.</p>
              </Box>
              <Box className="contact__signup">
                <Box className="email">
                  <Box className="email_img">
                    <img src={email} alt="email" className="" />
                  </Box>
                  <Box className="email_texts">
                    <h6>Email:</h6>
                    <h2>support@gowealthpro.com</h2>
                  </Box>
                </Box>
                <Box className="email">
                  <Box className="email_img">
                    <img src={phone} alt="email" className="" />
                  </Box>
                  <Box className="email_texts">
                    <h6>phone:</h6>
                    <h2>(781)366-0060</h2>
                  </Box>
                </Box>
              </Box>
              <Box className="contact__signup2 ">
                <Box className="email">
                  <Box className="email_img">
                    <img src={fax} alt="email" className="" />
                  </Box>
                  <Box className="email_texts">
                    <h6>Fax:</h6>
                    <h2>(866)373-0895</h2>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
