import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ArticleCard = ({
  blog: { id, title, description, date, image, imgAlt },
}) => {
  return (
    <div className="  rounded-lg">
      <img
        src={image}
        className=" h-[269.86px] xl:h-[298px] w-full object-cover rounded-t-lg"
        alt={imgAlt}
      />
      <div className="p-5 flex flex-col gap-4 md:gap-5 bg-customStone-500 rounded-b-lg">
        <h2 className=" font-heading text-[#141414] text-[21.95px] md:text-2xl xl:text-3xl font-normal">
          {title}
        </h2>
        <p className="text-gray-500 text-base xl:text-xl font-medium">
          {description}
        </p>
        <div className=" flex items-center justify-between">
          <p className="text-[#141414] text-base md:text-lg xl:text-xl font-medium">
            {date}
          </p>
          <Link
            to={`/blog/blog-detail/${id}`}
            className=" flex items-center gap-3 text-[#141414] text-sm md:text-lg xl:text-xl font-medium p-2   transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
          >
            <span>Read More</span>
            <HiArrowSmallRight className=" size-[19.87px] md:size-[21.73px] xl:size-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
