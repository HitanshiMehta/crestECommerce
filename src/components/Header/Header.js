import Banner from "../../assets/img/Banner.jpg";
import React from "react";

export const Header = ({ title, children }) => {
  return (
    <div>
      <div className="headerImgContainer">
        <img src={Banner} alt="headerImg" />
      </div>
      <div className="headerContainer">
        <div className="title">{title}</div>
        {children}
      </div>
    </div>
  );
};
