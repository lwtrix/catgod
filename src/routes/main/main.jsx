import AboutSection from "../../components/about-section/about-section";
import ButtonsSection from "../../components/buttons-section/buttons-section";
import TokenomicsSection from "../../components/tokenomics-section/tokenomics-section";
import "./main.css";

import React from "react";

const Main = () => {
  return (
    <div className="main">
      <ButtonsSection />
      <TokenomicsSection />
      <AboutSection />
    </div>
  );
};

export default Main;
