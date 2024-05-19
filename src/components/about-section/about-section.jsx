import MainBtn from "../main-btn/main-btn";
import "./about-section.css";

import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="heading">Who is Yumi?</h2>
      <div className="container">
        <div className="text-buy-container">
        <p>
          Yumi is King. Yumi is the one you shouldn't doubt. Yumi is elegant.
          Yumi is above average. Yumi is friendly. Yumi is the one you should trust.
          Yumi is top. <br/> <span className="text-highlight">TRUST IN YUMI</span>
        </p>
        <a href="https://pump.fun/aR8gjxkeEUXgnFBgBn5TRePZ4X5Gyf8pWk667ddyBp6">
        <MainBtn disabled>BUY NOW</MainBtn>
        </a>
        </div>
        <img src="./catgod.gif" alt="catgod gif" />
      </div>
    </div>
  );
};

export default AboutSection;
