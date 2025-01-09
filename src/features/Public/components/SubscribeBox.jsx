import React from "react";
import Container from "../../../components/Container";

const SubscribeBox = () => {
  return (
    <section>
      <Container>
        <div className=" py-40">
          <div className=" relative h-[298px] border-2 border-[#f5f5f6] bg-[#f5f5f6] flex flex-col items-center gap-9 justify-center">
            <div className="absolute  left-0 top-0">
              <img
                src="/public/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Group 143.svg"
                className=" w-[135px] h-[135px]"
                alt=""
              />
            </div>

            <div className=" flex flex-col text-center">
              <h1 className="text-[#141414] text-6xl font-normal font-heading">
                Subscribe to updates
              </h1>
              <p className="text-gray-500 text-xl font-light mt-5">
                Get email notifications about status page updates.
              </p>
            </div>

            <form className=" ">
              <div className="relative w-[500px] border rounded-lg border-gray-200">
                <input
                  type="email"
                  id="search-dropdown"
                  className="block p-4 py-3.5 w-full z-20  text-gray-500 text-[15px] font-medium bg-gray-50 rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-customPurple focus:border-customPurple dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-customPurple"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 h-full px-4 py-3.5 bg-[#6a669d] text-white text-[15px] font-normal rounded-r-lg border border-customPurple hover:bg-customPurple focus:ring-4 focus:outline-none focus:ring-customPurple dark:bg-customPurple dark:hover:bg-customPurple dark:focus:ring-customPurple"
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
