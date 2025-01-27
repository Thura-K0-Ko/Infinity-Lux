import React from "react";
import Container from "../../../components/Container";
import SocialMedia from "./SocialMedia";
import ContactUsForm from "./ContactUsForm";

const GetInTouch = () => {
  return (
    <section>
      <Container>
        <div className="p-[88px] shadow-lg rounded-lg relative  transform -translate-y-48 bg-white">
          <div className="flex flex-col gap-[60px] ">
            <div className=" flex flex-col items-center gap-3">
              <h3 className="text-customGray-500 text-4xl xl:text-5xl font-normal font-heading">
                Get In Touch
              </h3>
              <p className="text-gray-500 text-base xl:text-2xl">
                We’re always happy to answer any questions via phone or email.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-">
              <div className="colspan-1">
                <SocialMedia />
              </div>{" "}
              <div className="colspan-1">
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
