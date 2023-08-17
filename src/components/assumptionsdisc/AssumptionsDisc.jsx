import { Box, Container } from "@mui/material";
import { useState } from "react";
import "./AssumptionsDisc.css";
import assum01 from "../../assets/images/assum--01.png";
import assum02 from "../../assets/images/assum--02.png";
import assum03 from "../../assets/images/assum--03.png";
import assumpill from "../../assets/images/imgcircleforresponseive.png";
import { Link } from "react-router-dom";
import AssumSlider from "../assumptionsdisc/AssumSlider/AssumSlider";
const AssumptionsDisc = () => {
  const [expform, setFromExp] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const hanldechnage = (event) => {
    setFromExp({ ...expform, [event.target.name]: event.target.value });
  };
  const hanldesubmit = (event) => {
    event.preventDefault();
    console.log(expform);
  };
  return (
    <Container>
      <Box className="row assumtitlee---sec">
        <Box className="assum--col">
          <h2 className="min--title">
            Assumptions <br className="bar--assumeption" /> and Disclosures
          </h2>
          <p>The above results are based on the following assumptions:</p>
        </Box>
        <Box className="assum--col ass--2nd">
          <Link to="/" className="assum--print--report--btn">
            Print report
          </Link>
        </Box>
      </Box>
      <Box className="assum--wrapper--slide assum--wrapper--disktop">
        <Box className="assum--wrapper--item">
          <Box className="item--image">
            <img src={assum01} alt="" />
          </Box>
          <Box className="item--content">
            <p>
              Given the complexity behind federal and state income taxes, we
              have not considered the effect of income taxes on current
              retirement savings balances, contributions, and withdrawals during
              retirement. As a result, the required savings may be significantly
              different from when taxes are accounted for.
            </p>
          </Box>
        </Box>
        <Box className="assum--wrapper--item">
          <Box className="item--image">
            <img src={assum02} alt="" />
          </Box>
          <Box className="item--content">
            <p>
              Investment rate of return remains same throughout the plan period.
              In reality, investment returns could fluctuate widely depending on
              the economic environment and market conditions.
            </p>
          </Box>
        </Box>
        <Box className="assum--wrapper--item">
          <Box className="item--image">
            <img src={assum03} alt="" />
          </Box>
          <Box className="item--content">
            <p>
              Inflation rate remains same throughout the plan period. The
              inflation rate also varies from year to year depending on the
              economic environment.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="assum--wrapper--slide assum--wrapper--slider--responsive">
        <AssumSlider />
        <Box className="print--report">
          <button className="btn">
            <Link to="/">print report </Link>
          </button>
        </Box>
      </Box>
      <Box className="row">
        <Box className="important--disclosure">
          <h2>Important Disclosure:</h2>
          <p>
            For people who don't have a regular income, PFI is currently not a
            very good representative of their financial health and financial
            discipline.
          </p>
          <p>
            The PFITM score and financial needs analysis based on the data you
            provided may not be sufficient for making financial decisions.
            GoWealthPro and its business partner organizations are not
            responsible for any direct or indirect consequences related to this
            analysis.
          </p>
          <p>
            It is strongly recommended that you consult a professional advisor
            before making any financial decisions.
          </p>
        </Box>
      </Box>
      <Box className="assum--experiece row">
        <Box className="colum assum--expr--img">
          <img src={assumpill} alt="" />
        </Box>
        <Box className="colum assum--expr--from">
          <h2 className="expr--title">Please share your experience</h2>
          <p>We will be happy if you share your experience.</p>

          <form onSubmit={hanldesubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={expform.name}
              onChange={hanldechnage}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={expform.email}
              onChange={hanldechnage}
            />
            <input
              type="Number"
              name="phone"
              placeholder="Phone"
              value={expform.phone}
              onChange={hanldechnage}
            />

            <textarea
              name="feedback"
              cols="30"
              rows="10"
              placeholder="Feedback"
              value={expform.feedback}
              onChange={hanldechnage}
            />
            <button className="btn"> submit </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default AssumptionsDisc;
