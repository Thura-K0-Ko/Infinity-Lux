import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const AboutInfinityLux = ({
  title1,
  title2,
  content,
  btnText,
  firstImg,
  secondImg,
}) => {
  return (
    <section className="my-40">
      <Container>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[108px]">
            <div className="  col-span-1 items-start">
              <div className=" flex flex-col gap-8">
                <p className="text-[#6A669D] text-2xl font-medium ">
                  About Infinity Lux
                </p>
                <div className=" flex flex-col gap-11 items-start">
                  <h1 className="font-heading text-[#141414] text-5xl font-normal dark:text-neutral-900 ">
                    {title1}
                    <br /> {title2}
                  </h1>
                  <p className="text-xl text-gray-500 font-medium dark:text-gray-500 leading-relaxed w-[542px]">
                    {content}
                  </p>
                  {btnText && (
                    <Link
                      to={"about-us"}
                      className="bg-[#655B87] text-2xl font-semibold text-white px-10 py-5   hover:bg-[#4A4164] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
                    >
                      {btnText}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className=" col-span-1 flex  justify-end gap-5">
              <div className="  mt-auto">
                <img
                  src={firstImg}
                  alt="Luxury hotel interior"
                  className="h-[402px]  object-cover shadow-lg"
                />
              </div>
              <div className="  mb-auto">
                <img
                  src={secondImg}
                  alt="Rooftop terrace view"
                  className="h-[402px]  object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutInfinityLux;
