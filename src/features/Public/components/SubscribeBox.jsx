import React from "react";
import Container from "../../../components/Container";

const SubscribeBox = () => {
  return (
    <section>
      <Container>
        <div className=" md:py-[90px] xl:py-40">
          <div className=" relative md:h-[190px] xl:h-[298px] border-2 border-[#f5f5f6] bg-[#f5f5f6] flex flex-col items-center md:gap-[21.6px] xl:gap-9 justify-center">
            <div className="absolute  left-0 top-0">
              <img
                src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Group 143.svg"
                className="md:w-[81px] md:h[81px] xl:w-[135px] xl:h-[135px]"
                alt=""
              />
            </div>

            <div className=" flex flex-col text-center">
              <h1 className="text-customGray-500 md:text-4xl xl:text-6xl font-normal font-heading">
                Subscribe to updates
              </h1>
              <p className="text-gray-500 md:text-base xl:text-xl font-light md:mt-4 xl:mt-5">
                Get email notifications about status page updates.
              </p>
            </div>

            <form className=" ">
              <div className="relative w-[500px] border rounded-lg border-gray-200">
                <input
                  type="email"
                  id="search-dropdown"
                  className="block md:p-2 xl:px-4 xl:py-3.5 w-full z-20  text-gray-500 md:text-xs text-[15px] font-medium bg-gray-50 rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-customPurple-500 focus:border-customPurple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-customPurple-500"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 md:px-2 md:py-2.5 h-full xl:px-4 xl:py-3.5 bg-customPurple-500 text-white md:text-xs xl:text-[15px] font-normal rounded-r-lg border border-customPurple-500 hover:bg-customPurple-500 focus:ring-4 focus:outline-none focus:ring-customPurple-500 dark:bg-customPurple-500 dark:hover:bg-customPurple-500 dark:focus:ring-customPurple-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeBox;
