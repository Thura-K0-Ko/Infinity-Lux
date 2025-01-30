import React from "react";

const PopularCart = ({ img, title, date }) => {
  return (
    <div className="  flex  items-center gap-5">
      <img src={img} className=" h-[100px] md:h-[135px]" alt="" />
      <div className="flex flex-col gap-2 md:gap-5">
        <h3 className="text-customGray-500 text-base md:text-xl font-normal font-heading">
          {title}
        </h3>
        <p className="text-gray-500 text-base md:text-xl font-normal">{date}</p>
      </div>
    </div>
  );
};

export default PopularCart;
