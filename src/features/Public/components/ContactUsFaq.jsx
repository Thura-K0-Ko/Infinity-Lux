import React from "react";
import GeneralFaq from "./GeneralFaq";
import Container from "../../../components/Container";

const ContactUsFaq = () => {
  return (
    <Container>
      <div className=" py-[90px] xl:py-40">
        <div className=" mb-[60px] flex flex-col items-center gap-6">
          <h3 className=" text-customPurple-500 text-base xl:text-2xl font-medium">
            {" "}
            F . A . Qs
          </h3>
          <h1 className=" text-customGray-500 text-[40px] xl:text-5xl font-normal font-heading">
            Frequently Asked Questions
          </h1>
        </div>
        <GeneralFaq />
      </div>
    </Container>
  );
};

export default ContactUsFaq;
