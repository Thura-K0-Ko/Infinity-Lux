import React from "react";
import Container from "../../../components/Container";
import SocialMedia from "./SocialMedia";
import ContactUsForm from "./ContactUsForm";

const GetInTouch = () => {
  return (
    <section>
      <Container>
        <div className="py-[60px] md:px-[34px] md:py-[34px] xl:px-[88px] xl:py-[88px] md:shadow-lg md:rounded-lg relative  transform md:-translate-y-48 bg-white">
          <div className="flex flex-col gap-[40px] xl:gap-[60px]">
            <div className=" flex flex-col items-center gap-6 md:gap-3">
              <h3 className="text-customGray-500 text-2xl md:text-4xl xl:text-5xl font-normal font-heading">
                Get In Touch
              </h3>
              <p className="text-gray-500 text-base xl:text-2xl tracking-[0.08px]">
                We’re always happy to answer any questions via phone or email.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-2 md:col-span-1">
                <SocialMedia />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
