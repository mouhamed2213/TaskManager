import React from "react";
import Box from "../components/Box";
const Box = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center rounded-lg shadow-amber-50 w-1/6 p-34">
        {children}
      </div>
    </>
  );
};

export default Box;
