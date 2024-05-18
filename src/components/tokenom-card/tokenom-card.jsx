import "./tokenom-card.css";

import React from "react";

const TokenomCard = ({ title, value, description, width, imgUrl }) => {
  return (
    <div className="card-container">
      <div className="info-container">
        <div className="text-container">
          <span className="title">{title}</span>
          <span className="value">{value}</span>
        </div>
        <img src={imgUrl} alt="total supply illustration" width={`${width}px`}/>
      </div>
      <p className="description">
        {description}
      </p>
    </div>
  );
};

export default TokenomCard;
