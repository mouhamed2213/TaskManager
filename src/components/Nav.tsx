import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="w-full bg-blue-500 p-8">
        <nav className="flex justify-center gap-20">
          <Link
            to="#"
            className="text-center font-medium bg-white p-2 w-25 rounded-sm hover:bg-blue-800 hover:text-white "
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="#"
            className="text-center font-medium bg-white p-2 w-25 rounded-sm hover:bg-blue-800 hover:text-white "
          >
            {" "}
            Add task{" "}
          </Link>
          <Link
            to="#"
            className="text-center font-medium bg-white p-2 w-25 rounded-sm hover:bg-blue-800 hover:text-white "
          >
            {" "}
            Task List{" "}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
