import './buttons-section.css'

import React from "react";

import MainBtn from "../../components/main-btn/main-btn";
import { IoStatsChart } from "react-icons/io5";


const ButtonsSection = () => {
  return (
    <div className="buttons-section">
      <div className="buy-container">
        <img src="./buy-now.png" alt="cat god" />
        <MainBtn disabled>BUY NOW</MainBtn>
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
          <span className="ca-text">0X0000000000000 (Coming Soon)</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSection;
