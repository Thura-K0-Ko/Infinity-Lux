import React from "react";
import GeneralFaq from "./GeneralFaq";

const ContactUsFaq = () => {
  return (
    <div className="py-40">
      <div className=" mb-[60px] flex flex-col items-center gap-6">
        <h3 className=" to-customPurple-500 text-2xl font-medium">
          {" "}
          F . A . Qs
        </h3>
        <h1 className=" text-customGray-500 text-5xl font-normal font-heading">
          Frequently Asked Questions
        </h1>
      </div>
      <GeneralFaq />
    </div>
  );
};

export default ContactUsFaq;
