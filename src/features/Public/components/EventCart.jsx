import React from "react";
import Container from "../../../components/Container";

const EventCart = () => {
  return (
    <section>
      <Container>
        <div className="py-40  ">
          <div className=" flex flex-col gap-6 items-center mb-[60px]">
            <p className="text-customPurple-500 text-2xl font-medium">
              Curated For You
            </p>
            <h1 className="text-customGray-500 text-5xl font-heading font-normal">
              Meetings & Events
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="col-span-1">
              <div className=" flex flex-col items-center relative">
                <img
                  src="/public/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Meeting_event_image.png"
                  className="w-full"
                  alt=""
                />
                <button className="absolute bottom-0 translate-y-1/2 p-8 bg-customPurple-500 flex flex-col gap-3  justify-center items-center">
                  <h3 className="text-center text-white text-4xl font-heading font-normal ">
                    {" "}
                    Meeting Events
                  </h3>
                  <p className="text-gray-300 text-xl font-medium">
                    Elevate your meetings with our sophisticated venues
                  </p>
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" flex flex-col items-center relative">
                <img
                  src="/public/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Wedding_event_image.png"
                  className="w-full"
                  alt=""
                />
                <button className="absolute bottom-0 translate-y-1/2 p-8 bg-customPurple-500 flex flex-col gap-3  justify-center items-center">
                  <h3 className="text-center text-white text-4xl font-heading font-normal ">
                    {" "}
                    Meeting Events
                  </h3>
                  <p className="text-gray-300 text-xl font-medium">
                    Elevate your meetings with our sophisticated venues
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventCart;
