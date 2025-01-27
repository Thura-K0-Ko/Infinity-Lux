import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} w-[342px] sm:w-[550px] md:w-[768px] lg:w-[1280px] mx-auto`}>
      {children} 
    </div>
  );
};

export default Container;
