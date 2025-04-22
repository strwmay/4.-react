import React from "react";

const Header = () => {
  return (
    <header className="w-100 navbar navbar-dark bg-dark">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div id="logo" role="button" className="d-flex align-items-center">
          <i className="bi bi-controller fs-1 text-light ms-4"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>

        <input type="text" 
        className="w-100 d-none d-md-block border-0 rounded-1 search px-4 my-2"   
        placeholder="Search..." />
      </div>

      <div id="cart">
        <i className="bi bi-cart4 text-light fs-2 m-4"></i>
      </div>
    </header>
  );
};

export default Header;
