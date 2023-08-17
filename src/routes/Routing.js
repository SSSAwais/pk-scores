import { Routes, Route } from "react-router-dom";

import { Home, SignUp, FinancialHealth, FormSection } from "../pages/pages";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/financial-health" element={<FinancialHealth />} />
      <Route path="/form-detail" element={<FormSection />} />
    </Routes>
  );
};

export default Routing;
