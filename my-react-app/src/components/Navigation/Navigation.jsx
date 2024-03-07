import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'
import heart from '../Navigation/NavImg/heart.png'
// import basket from '../HeaderBanner/HeaderImg/basket.png'

const Navigation = () => {
    return (
<header>

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
  {/* <img src={basket} alt="basket" /> */}
  </div>
</header> 
    )
}

export default Navigation
      
