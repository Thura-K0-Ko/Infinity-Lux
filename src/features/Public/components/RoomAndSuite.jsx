import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const RoomAndSuite = () => {
  return (
    <section>
      <div className="xl:py-40 xl:bg-customSlate-500">
        <Container>
          <div className="flex flex-col gap-10  xl:relative">
            <div className="bg-white xl:p-8 xl:absolute xl:right-0 xl:top-8 xl:w-[630px]">
              <div className=" flex flex-col gap-6">
                <p className="text-[#6A669D] md:text-base xl:text-2xl font-medium ">
                  Stay With Us
                </p>
                <div className=" flex flex-col md:gap-8 xl:gap-9 items-start">
                  <h1 className="font-heading text-[#141414] md:text-[40px] xl:text-5xl font-normal dark:text-neutral-900 ">
                    Rooms & Suites
                  </h1>
                  <p className="md:text-base xl:text-xl text-gray-500 font-medium dark:text-gray-500 leading-relaxed xl:w-[542px]">
                    Inspired by the playful synergy of the world’s natural
                    elements, each of our 237 rooms and suites have been
                    designed with comfort and style in mind, encouraging you to
                    rest and recharge against the captivating backdrop of
                    Yangon.
                  </p>
                  <Link
                    to={"rooms"}
                    className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                  >
                    View Rooms
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Room and Suit image.png"
                className="md:h-[480px] xl:h-[530px]"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default RoomAndSuite;
