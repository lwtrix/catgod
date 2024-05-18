import React from "react";

import "./main-btn.css";

const MainBtn = ({ children, href, disabled, ...otherProps }) => {
  return (
    <a href={`${href}`} className={`main-btn ${disabled && 'disabled'}`}>
      <button {...otherProps}>
        {children}
      </button>
    </a>
  );
};

export default MainBtn;
