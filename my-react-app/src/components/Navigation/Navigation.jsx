import React from "react";
import styles from "./Navigation.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconImg from "./HeaderImg/icons.png";
import BtnDarkMode from './btnDarkMode/BtnDarkMode';
// import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles}>
      <div className="discount">
            <button1>1 day discount!</button1>
          </div>
      <nav className="header__nav">
        <ul>
          <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <BtnDarkMode />
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
<li className="burger">☰</li>
           <div className="header__icon">
             <img src={iconImg} alt="Icon" />
          </div>
         </ul>
       </nav>
     </header>
   );
 };
 export default Header;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navigation = () => (
//   <nav className="navigation">
//     <ul>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/all-goods">All Goods</NavLink></li>
//       <li><NavLink to="/categories-goods">Categories</NavLink></li>
//       <li><NavLink to="/sale-goods">Sale</NavLink></li>
//       <li><NavLink to="/bag">Bag</NavLink></li>
//       <li><NavLink to="/contact">Contact</NavLink></li>
//       <li className="burger">☰</li>
//     </ul>
//   </nav>
// );

// export default Navigation;