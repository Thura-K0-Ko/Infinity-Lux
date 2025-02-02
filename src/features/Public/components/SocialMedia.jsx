import React from "react";
import {
  HiLocationMarker,
  HiMap,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import { HiOutlineMap } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-5 md:gap-5 xl:gap-20">
      <div className="">
        <Link
          to={"/login"}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-6 border md:border-0 py-2 px-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-4 focus:ring-customPurple-300  focus:outline-none dark:focus:ring-customPurple-800 rounded-lg"
        >
          <img
            src="/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/phone-call.svg"
            alt=""
            className=" h-[25px] xl:h-14"
          />
          <p className="flex flex-col items-center md:items-start">
            <span className="font-heading text-base xl:text-2xl font-normal text-customGray-500">
              Reservation
            </span>
            <span className=" text-customPurple-500 text-base xl:text-2xl font-normal">
              +959756895143{" "}
            </span>
          </p>
        </Link>
      </div>
      <div className="">
        {/* {" "} */}
        <Link
          to={"/login"}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-6 border md:border-0 py-2 px-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-4 focus:ring-customPurple-300  focus:outline-none dark:focus:ring-customPurple-800 rounded-lg"
        >
          <HiOutlineMail className="size-[25px] xl:size-14 stroke-customPurple-500" />
          <p className="flex flex-col items-center md:items-start">
            <span className="font-heading text-base xl:text-2xl font-normal text-customGray-500 ">
              Email Us
            </span>
            <span className=" text-customPurple-500 text-base xl:text-2xl font-normal">
              infinitlux@gmail.com
            </span>
          </p>
        </Link>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Link
          to={"/login"}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-6 border md:border-0 py-2 px-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-4 focus:ring-customPurple-300  focus:outline-none dark:focus:ring-customPurple-800 rounded-lg"
        >
          <HiOutlineLocationMarker className="size-[25px] xl:size-14 stroke-customPurple-500" />
          <p className="flex flex-col items-center md:items-start">
            <span className="font-heading text-base xl:text-2xl font-normal text-customGray-500 ">
              Address
            </span>
            <span className=" text-customPurple-500 text-base xl:text-2xl font-normal">
              No 101, Kan Street, Hlaing, Township, <br /> Yangon, Myanmar,
              11051
            </span>
          </p>
        </Link>
      </div>
      <div className="hidden md:flex flex-col gap-6">
        <h3 className="text-black text-xl xl:text-[32px] font-heading">
          Follow Our Social Media
        </h3>
        <div className="flex gap-7">
          <Link
            to={"https://www.facebook.com/"}
            className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <img
              src="/assets/Infinity Lux image Assets/9. Contact Us ( Infinity Lux )/facebook.png"
              className=" size-8 xl:size-14"
              alt=""
            />
          </Link>
          <Link
            to={"https://www.instagram.com/"}
            className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <img
              src="/assets/Infinity Lux image Assets/9. Contact Us ( Infinity Lux )/instagram1.png"
              className=" size-8 xl:size-14"
              alt=""
            />
          </Link>
          <Link
            to={"https://www.twitter.com/"}
            className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <img
              src="/assets/Infinity Lux image Assets/9. Contact Us ( Infinity Lux )/twitter1.png"
              className=" size-8 xl:size-14"
              alt=""
            />
          </Link>
          <Link
            to={"https://www.twitter.com/"}
            className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <img
              src="/assets/Infinity Lux image Assets/9. Contact Us ( Infinity Lux )/linkedin3.png"
              className=" size-8 xl:size-14"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
