import React from "react";
import "./FinancialHealth.css";
import AssumptionsDisc from "../../components/assumptionsdisc/AssumptionsDisc";
import FooterImg from "../../components/footerimg/FooterImg";
import FinancialHelathHero from "../../components/financialhelathhero/FinancialHelathHero";

const FinancialHealth = () => {
  return (
    <>
      <section className="FinancialHealth">
        <FinancialHelathHero />
        <AssumptionsDisc />
        <FooterImg />
      </section>
    </>
  );
};

export default FinancialHealth;
