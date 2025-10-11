import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="w-full bg-blue-500 p-8">
        <nav className="flex justify-center gap-20">
          <Link to="#" className="">
            {" "}
            Home{" "}
          </Link>
          <Link to="#"> Add task </Link>
          <Link to="#"> Task List </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
