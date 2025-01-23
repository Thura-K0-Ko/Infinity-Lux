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
  reservationText,
  className,
}) => {
  return (
    <section className="md:py-[90px] xl:py-40">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-5">
          <div className={className}>
            <div className=" flex flex-col gap-8">
              <p className="text-customPurple-500 md:text-base xl:text-2xl font-medium ">
                About Infinity Lux
              </p>
              <div className=" flex flex-col gap-11 items-start">
                <h1 className="font-heading text-customGray-500 md:text-[40px] xl:text-5xl font-normal dark:text-neutral-900 ">
                  {title1}
                  <br /> {title2}
                </h1>
                <p className=" md:text-base xl:text-xl text-gray-500 font-medium dark:text-gray-500 leading-relaxed xl:w-[542px]">
                  {content}
                </p>
                {reservationText && (
                  <Link to={"/login"} className="flex items-center gap-6">
                    <img
                      src="/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/phone-call.svg"
                      alt=""
                      className="w-[56px] h-[56px]"
                    />
                    <p className="flex flex-col">
                      <span className="font-heading text-2xl font-[400]">
                        {reservationText}
                      </span>
                      <span className=" text-customPurple-500 text-2xl font-[400]">
                        +959756895143{" "}
                      </span>
                    </p>
                  </Link>
                )}
                {btnText && (
                  <Link
                    to={"about-us"}
                    className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                  >
                    {btnText}
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className=" col-span-1 flex xl:justify-end gap-5 md:h-[580px] xl:h-auto">
            <div className="  mt-auto">
              <img
                src={firstImg}
                alt="Luxury hotel interior"
                className="md:h-[490.6px] xl:h-[402px]  object-cover shadow-lg"
              />
            </div>
            <div className="  mb-auto">
              <img
                src={secondImg}
                alt="Rooftop terrace view"
                className="md:h-[490.6px] xl:h-[402px]  object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutInfinityLux;
