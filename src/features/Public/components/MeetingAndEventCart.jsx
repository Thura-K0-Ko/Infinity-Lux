import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const MeetingAndEventCart = () => {
  return (
    <section>
      <Container>
        <div className=" md:py-[90px] xl:py-40">
          <div className="flex flex-col md:gap-10 xl:gap-[60px]">
            <div className=" flex flex-col gap-6 items-center">
              <p className="text-customPurple-500 text-base xl:text-2xl font-medium">
                Curated For You
              </p>
              <h1 className="text-customGray-500 md:text-[40px] xl:text-5xl font-heading font-normal">
                Meetings & Events
              </h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <div className="col-span-1">
                <div className=" flex flex-col items-center relative">
                  <img
                    src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Meeting_event_image.png"
                    className="w-full"
                    alt=""
                  />
                  <Link
                    to={"/events/meeting"}
                    className="absolute bottom-0 translate-y-1/2  md:p-5 md:mx-8 xl:p-8 bg-customPurple-500 flex flex-col  md:gap-1.5 xl:gap-3  justify-center items-center   hover:shadow-lg transform duration-300 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                  >
                    <h3 className="text-center text-white md:text-xl xl:text-4xl font-heading font-normal ">
                      {" "}
                      Meeting Events
                    </h3>
                    <p className="text-gray-300 md:text-base xl:text-xl font-medium text-center">
                      Elevate your meetings with our sophisticated venues
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className=" flex flex-col items-center  relative">
                  <img
                    src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Wedding_event_image.png"
                    className="w-full"
                    alt=""
                  />
                  <Link
                    to={"events/wedding"}
                    className="absolute bottom-0 translate-y-1/2  md:p-5 md:mx-8 xl:p-8 bg-customPurple-500 flex flex-col  md:gap-1.5 xl:gap-3  justify-center items-center   hover:shadow-lg transform duration-300 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                  >
                    <h3 className="text-center text-white md:text-xl xl:text-4xl font-heading font-normal ">
                      {" "}
                      Wedding Events
                    </h3>
                    <p className="text-gray-300 md:text-base xl:text-xl font-medium text-center">
                      Celebrate your love story with our enchanting venues
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MeetingAndEventCart;
