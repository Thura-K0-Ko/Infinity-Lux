import React from "react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div className="bg-white py-40">
      <div
        style={{background: "url('/assets/Hotel Profile website/image-9.png')"}}
        className="flex flex-col justify-center items-center w-[1512px] h-[518px]"
      >
        <h2 className="font-heading text-center text-white text-[64px] font-normal mb-32">
          Can’t Find What Are You looking For?
        </h2>
        <div className="flex justify-center items-center">
          <Link
            to={"/contact-us"}
            className="bg-customPurple-500 text-white text-2xl font-semibold px-10 py-5 "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
