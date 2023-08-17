import React, { useEffect, useState } from "react";
import "./Home.css";
import Herosection from "../../components/hero/Herosection";
import Personalfinancial from "../../components/personalfinancial/Personalfinancial";
import FooterImg from "../../components/footerimg/FooterImg";
import loadingImg from "../../assets/images/loader.gif";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <section className="Home">
        {loading && (
          <div className="loader">
            <img src={loadingImg} alt="loading" />
          </div>
        )}
        <Herosection />
        <Personalfinancial />
        <FooterImg />
      </section>
    </>
  );
};

export default Home;
