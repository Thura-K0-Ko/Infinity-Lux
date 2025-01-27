import React from "react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (

    <div className="bg-white pb-[90px] xl:pb-40">
      <div
        style={{
          background: "url('/assets/Hotel Profile website/image-9.png')",
        }}
        className="flex flex-col justify-center items-center h-[285px] xl:h-[518px]"
      >
        <h2 className="font-heading text-center text-white text-4xl xl:text-[64px] font-normal mb-[70px] xl:mb-32">

    {/* <div className="bg-white w-full xl:w-[1512px] h-[415px] xl:h-[680px] pb-[90px] xl:pb-40">
     <img src="/assets/Hotel Profile website/image-9.png" className="absolute" />
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="font-heading text-center text-white z-10 text-4xl xl:text-[64px] font-normal mb-[70px] xl:mb-32"> */}

          Can’t Find What Are You looking For?
        </h2>
        <div className="flex justify-center items-center">
          <Link
            to={"/contact-us"}
            className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
