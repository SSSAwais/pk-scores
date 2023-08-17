import React, { useState } from "react";
import "./Footer.css";
import { Container, Box } from "@mui/material";
import footelogo from "../../assets/images/footer-logo.png";

import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import fax from "../../assets/images/fax.png";
import footercircle from "../../assets/images/footer--title--circel4.png";
const Footer = () => {
  const [footerFrom, setFooterForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handelChangeInput = (event) => {
    setFooterForm({ ...footerFrom, [event.target.name]: event.target.value });
  };
  const hanldeformsubmit = (e) => {
    e.preventDefault();
    console.log(footerFrom);
  };
  return (
    <>
      <footer>
        <Container maxWidth="lg" className="footer--top">
          <Box className="row">
            <h4 className="title--foot">
              Ready to upgrade your proficiency <br /> in managing your personal
              finances?
              <img
                src={footercircle}
                alt="footercircle"
                className="footercircle"
              />
            </h4>
          </Box>
          <Box className="row">
            <Box className="col--foot--top">
              <Box className="techincal--support">
                <ul>
                  <li className="foot---tile--s">
                    <span className="circle--icons--foot" />
                    Technical Support
                  </li>
                </ul>
                <p>For faster service, use online chat.</p>
                <Box className="social--linl--wrapper">
                  <Box className="social--links">
                    <Box className="socil--img">
                      <img src={email} alt="email" />
                    </Box>
                    <Box className="socil--cont">
                      <label>Email:</label>
                      <p>support@gowealthpro.com</p>
                    </Box>
                  </Box>

                  <Box className="social--links">
                    <Box className="socil--img">
                      <img src={phone} alt="phone" />
                    </Box>
                    <Box className="socil--cont">
                      <label>Phone:</label>
                      <p>(781) 366-0060</p>
                    </Box>
                  </Box>

                  <Box className="social--links">
                    <Box className="socil--img">
                      <img src={fax} alt="fax" />
                    </Box>
                    <Box className="socil--cont">
                      <label>Fax:</label>
                      <p>(866) 373-0895</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="general--inqury">
                <ul>
                  <li className="foot---tile--s">
                    <span className="circle--icons--foot" />
                    General Inquiries
                  </li>
                </ul>

                <Box className="social--linl--wrapper">
                  <Box className="social--links">
                    <Box className="socil--img">
                      <img src={email} alt="email" />
                    </Box>
                    <Box className="socil--cont">
                      <label>Email:</label>
                      <p>marketing@gowealthpro.com</p>
                    </Box>
                  </Box>

                  <Box className="social--links">
                    <Box className="socil--img">
                      <img src={phone} alt="phone" />
                    </Box>
                    <Box className="socil--cont">
                      <label>Phone:</label>
                      <p>(781) 366-0062</p>
                    </Box>
                  </Box>

                  <Box className="social--links">
                    <Box className="socil--img">
                      <img src={fax} alt="fax" />
                    </Box>
                    <Box className="socil--cont">
                      <label>Fax:</label>
                      <p>(866) 373-0895</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col--foot--top">
              <ul>
                <li className="foot---tile--s">
                  {" "}
                  <span className="circle--icons--foot" /> Your Questions /
                  Comments
                </li>
              </ul>
              <form onSubmit={hanldeformsubmit} className="form--footer">
                <input
                  type="text"
                  name="name"
                  value={footerFrom.name}
                  placeholder="Name"
                  onChange={handelChangeInput}
                />
                <input
                  type="email"
                  name="email"
                  value={footerFrom.email}
                  placeholder="Email"
                  onChange={handelChangeInput}
                />
                <input
                  type="number"
                  name="phone"
                  value={footerFrom.phone}
                  placeholder="Phone"
                  onChange={handelChangeInput}
                />
                <textarea
                  value={footerFrom.message}
                  name="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  onChange={handelChangeInput}
                />

                <input type="submit" className="submit--btn" />
              </form>
            </Box>
          </Box>
          <Box className="footer--location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31452.33962138849!2d-118.3562569365935!3d34.04335922408717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93cca9c7ab1%3A0x9b191d3aac3e37!2sLos%20Angeles%20County%20Museum%20of%20Art!5e0!3m2!1sen!2s!4v1672294522597!5m2!1sen!2s"
              frameBorder="0"
              style={{
                width: "100%",
                height: "100%",
              }}
              title="United State"
            />
          </Box>
        </Container>
        <Container maxWidth="lg" className="footer">
          <Box className="row">
            <Box className="footer--left">
              <img src={footelogo} alt="footer logo" />
            </Box>
            <Box className="footer--right">
              <p>All rights reserved. PFSCORES ©</p>
            </Box>
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
