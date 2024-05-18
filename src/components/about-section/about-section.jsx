import MainBtn from "../main-btn/main-btn";
import "./about-section.css";

import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="heading">Who is the Cat God??</h2>
      <div className="container">
        <div className="text-buy-container">
        <p>
          His Highness is a prelude to abundance itself. He has your favourite
          coin bow down to Him, as He is the ONE TRUE CAT GOD. Join His presence
          and be granted the ultimate ecstasy.
        </p>
        <a href="https://pump.fun/aR8gjxkeEUXgnFBgBn5TRePZ4X5Gyf8pWk667ddyBp6">
        <MainBtn href={'https://pump.fun/aR8gjxkeEUXgnFBgBn5TRePZ4X5Gyf8pWk667ddyBp6'}>BUY NOW</MainBtn>
        </a>
        </div>
        <img src="./catgod.gif" alt="catgod gif" />
      </div>
    </div>
  );
};

export default AboutSection;
