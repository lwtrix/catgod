import './buttons-section.css'

import React from "react";

import MainBtn from "../../components/main-btn/main-btn";
import { IoStatsChart } from "react-icons/io5";


const ButtonsSection = () => {
  return (
    <div className="buttons-section">
      <div className="buy-container">
        <img src="./buy-now.png" alt="cat god" />
        <a href='https://pump.fun/aR8gjxkeEUXgnFBgBn5TRePZ4X5Gyf8pWk667ddyBp6'>
        <MainBtn>BUY NOW</MainBtn>
        </a>
      </div>
      <div className="bottom-section">
        <div className="links-container">
          <MainBtn disabled>Dexscreen</MainBtn>
            <MainBtn disabled>
              <IoStatsChart className="icon" />
            </MainBtn>
        </div>
        <div className="ca-container">
          <span className="ca-label">Contract Address</span>
          <span className="ca-text">aR8gjxkeEUXgnFBgBn5TRePZ4X5Gyf8pWk667ddyBp6</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSection;
