import React from "react";

const EventParagraph = ({ subTitle, title, para1, para2 }) => {
  return (
    <div className=" xl:w-[1086px] xl:mx-auto">
      <h4 className="text-center text-customPurple-500 text-base xl:text-2xl font-medium mb-4 md:mb-6">
        {subTitle}{" "}
      </h4>
      <h2 className="text-center text-customGray-500 font-heading text-[32px] md:text-[40px] xl:text-5xl font-normal mb-10 xl:mb-[60px]">
        {title}
      </h2>
      <p className="text-gray-500 text-base/[22px] xl:text-xl font-light tracking-[0.08px] mb-8 xl:mb-[52px]">
        {para1}
      </p>
      <p className="text-gray-500 text-base/[22px] xl:text-xl font-light tracking-[0.08px] mb-8 xl:mb-[52px]">
        {para2}
      </p>
    </div>
  );
};

export default EventParagraph;
