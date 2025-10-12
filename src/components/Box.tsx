import { type ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  title?: string;
}

const Box = ({ children, title }: BoxProps) => {
  return (
    <>
      <div className="bg-white flex items-center justify-center m-auto rounded-lg shadow-lg mt-20 w-1/2 p-3">
        <div>
          {" "}
          {title ? <h1 className="font-bold"> {title}</h1> : ""}
          {children}
        </div>
      </div>
    </>
  );
};

export default Box;
