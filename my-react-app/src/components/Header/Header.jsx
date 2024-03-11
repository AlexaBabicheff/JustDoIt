import React from "react";
import styles from "./Header.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconImg from "./HeaderImg/icons.png";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles}>
      <nav className={header__nav}>
        <ul>
          <div className={logo}>
            <img src={logoImg} alt="Logo" />
          </div>
          <li>
      <NavLink
              to="/"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Main Page
            </NavLink>
            {/* <a href="#!">Main Page</a> */}
    </li>
          <li>
          <NavLink
              to="/Categories"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Categories
            </NavLink>
            {/* <a href="#!">Categories</a> */}
          </li>
          <li>
          <NavLink
              to="/All products"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              All products
            </NavLink>
            {/* <a href="#!">All products</a> */}
          </li>
          <li>
          <NavLink
              to="/All sales"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              All sales
            </NavLink>
            {/* <a href="#!"></a>All sales */}
          </li>
          <div className={header__icon}>
            <img src={iconImg} alt="Icon" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header

/* <header>

<nav>
  <ul>
    <li>
      <NavLink
              to="/"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Main Page
            </NavLink>
    </li>
    <li>
      <NavLink
              to="/Categories"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Categories
            </NavLink>
    </li>
    <li>
      <NavLink
              to="/All products"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              All products
            </NavLink>
      </li>
    <li>
      <NavLink
              to="/All sales"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              All sales
            </NavLink>
      </li>
  </ul>
</nav>
<div className="icons">
  <img src={heart} alt="heart" />
  <img src={basket} alt="basket" />
  </div>

  
</header> 
    )
} */

//  <header className={styles}>
//   {/* <div className="container"> */}
//     {/* <div className="header__row"> */}
//     <div className="logo">
//       {/* <div className="header__logo"> */}
//         <img src={logoImg} alt="Logo" />
//         {/* </div> */}
//       {/* <div className="header__nav"> */}
//         <nav className="header__nav">
//         <ul>
//         {/* <img src={logoImg} alt="Logo" /> */}
//           <li><a href="#!">Main Page</a></li>
//           <li><a href="#!">Categories</a></li>
//           <li><a href="#!">All products</a></li>
//           <li><a href="#!"></a>All sales</li>
//         </ul>
//         </nav>
//         <div className="header__icon">
//         <img src={iconImg} alt="Icon" />
//         </div>
//       {/* </div> */}
//     </div>
//   {/* </div> */}
// </header>