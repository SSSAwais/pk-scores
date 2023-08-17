import { Container, Box } from "@mui/material";
import React from "react";
import "./Header.css";
import headerlogo from "../../assets/images/header-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Container maxWidth="lg" className="header">
        <Box className="row">
          <Box className="header--left">
            <Link to="/">
              <img src={headerlogo} alt="headerlogo" />
            </Link>
          </Box>
          <Box className="header--right">
            <button className="login--btn">
              <Link to="/signup">Login</Link>
            </button>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
