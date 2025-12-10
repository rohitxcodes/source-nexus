import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="px-1">
        <div className="nav flex gap-50">
          <div className="logo py-5">
            <img className="h-20" src="frontend\src\assets\logo.png" alt="" />
          </div>
          <div className="nav-buttons flex gap-10 py-10 px-10">
            <p>Train</p>
            <p>Practice</p>
            <p>About</p>
            <p>Shop</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
