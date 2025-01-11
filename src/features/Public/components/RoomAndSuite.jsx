import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const RoomAndSuite = () => {
  return (
    <section>
      <div className="py-40 bg-roomBG">
        <Container>
          <div className="relative">
            <div className="">
              <img
                src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Room and Suit image.png"
                className=" h-[530px]"
                alt=""
              />
            </div>
            <div className="bg-white p-8 absolute right-0 top-8 w-[630px]">
              <div className=" flex flex-col gap-6">
                <p className="text-[#6A669D] text-2xl font-medium ">
                  Stay With Us
                </p>
                <div className=" flex flex-col gap-9 items-start">
                  <h1 className="font-heading text-[#141414] text-5xl font-normal dark:text-neutral-900 ">
                    Rooms & Suites
                  </h1>
                  <p className="text-xl text-gray-500 font-medium dark:text-gray-500 leading-relaxed w-[542px]">
                    Inspired by the playful synergy of the world’s natural
                    elements, each of our 237 rooms and suites have been
                    designed with comfort and style in mind, encouraging you to
                    rest and recharge against the captivating backdrop of
                    Yangon.
                  </p>

                  <Link
                    to={"rooms"}
                    className="bg-[#655B87] text-2xl font-semibold text-white px-10 py-5   hover:bg-[#4A4164] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
                  >
                    View Rooms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default RoomAndSuite;
