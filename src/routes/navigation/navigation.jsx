import "./navigation.css";

import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img src="./logo.png" alt="CatGod Logo" className="logo" />
        <div className="logo-heading" aria-level="1" role="heading">
          $YUMI
        </div>
      </Link>
      <ul className="links-container">
        <li>
          <a
            href="https://t.me/YumiOnSol"
            target="blank"
            rel="noopener noreferrer"
            className="icon-container"
          >
            <FaTelegramPlane className="icon telegram"/>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Yumi1287342652"
            target="blank"
            rel="noopener noreferrer"
            className="icon-container"
          >
            <FaXTwitter className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
