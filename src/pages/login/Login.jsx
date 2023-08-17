import React, { useState } from "react";
import "./Login.css";
import { Container, Box, Checkbox, Button, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AbsInput from "../../components/absInput/AbsInput";
import signUpLogo from "../../assets/images/signupLogo.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import fax from "../../assets/images/fax.png";
import heroimg from "../../assets/images/login.png";
const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      <section className="login_main_wrapepr">
        <Container maxWidth="lg">
          <Box className="row">
            <Box className="left_section_sign">
              <Box className="signup__wrapper_left_section">
                <Box className="signup_heading">
                  <h2>Login to personal Financial Index &reg;</h2>
                </Box>
                <form onSubmit={_handleSubmitForm}>
                  <Box className="sigup_form">
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

                    <Box className="remember_forget">
                      <Box className="checkBox_signup">
                        <Checkbox {...label} />
                        <h6>Remember Me</h6>
                      </Box>

                      <Box className="forget_password_login">
                        <Link href="#">Forget Password</Link>
                      </Box>
                    </Box>
                    <Box className="buttons_section">
                      <Button className="sign_up_button" type="submit">
                        Login{" "}
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
                        <p>New User ?</p>
                        <Link href="#">Sign Up</Link>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
            <Box className="right_section_signUp ">
              <Box className="prscrore_sign_ip">
                <img src={signUpLogo} alt="logo" />
                <img src={heroimg} alt="pills" className="pills" />
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

export default Login;
