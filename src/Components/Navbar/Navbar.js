import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="mt-4 text-center text-md-start ">
        <Link className="link-style border border-primary px-3 py-1 rounded" to="/home">
          Home
        </Link>
        <Link className="link-style ms-4 border border-primary px-3 py-1 rounded" to="/chart">
          Analytics
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
