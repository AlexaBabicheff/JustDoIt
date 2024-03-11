import React from "react";
import styles from "./Header.module.css";
import logoImg from "./HeaderImg/logo (1).svg";
import iconImg from "./HeaderImg/icons.png";

// import { NavLink } from "react-router-dom";
// import classes from "./Navigation.module.css";
// import heart from "../Navigation/NavImg/heart.png";
// import basket from "../Navigation/NavImg/basket.png";

const Header = () => {
  return (
    <header className={styles}>
      <nav className="header__nav">
        <ul>
          <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <li>
            <a href="#!">Main Page</a>
          </li>
          <li>
            <a href="#!">Categories</a>
          </li>
          <li>
            <a href="#!">All products</a>
          </li>
          <li>
            <a href="#!"></a>All sales
          </li>
          <div className="header__icon">
            <img src={iconImg} alt="Icon" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
