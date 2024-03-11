import React from "react";
import banner from "../HeaderBanner/HeaderImg/banner.jpeg";

const HeaderBanner = () => {
  return (
    <>
      <banner>
        <div className="Amazing Discount">
          <h3>Amazing Discounts on Garden Products!</h3>
          <button>Check out</button>
        </div>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </banner>
    </>
  );
};

export default HeaderBanner;
