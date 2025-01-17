import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} w-full md:w-[670px] lg:w-[1100px] xl:w-[1280px] mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
