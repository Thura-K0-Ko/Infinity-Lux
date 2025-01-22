import React from "react";

const ContactUsForm = () => {
  return (
    <form>
      <div className="w-full grid grid-cols-1 gap-x-5 gap-y-8">
        <div className="">
          <label
            htmlFor="name"
            className={`block mb-2 text-2xl  text-blue-950 dark:text-white`}
          >
            Name <span className=" text-customGray-500">*</span>
          </label>
          <input
            type="text"
            className={`border border-gray-100
                text-gray-500 text-base rounded-lg block w-full p-3 shadow`}
            placeholder="Your name..."
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className={`block mb-2 text-2xl  text-blue-950 dark:text-white`}
          >
            Email <span className=" text-customGray-500">*</span>
          </label>
          <input
            type="email"
            className={`border border-gray-100
                text-gray-500 text-base rounded-lg block w-full p-3 shadow`}
            placeholder="Your email..."
          />
        </div>
        <div className="">
          <label
            htmlFor="phone"
            className={`block mb-2 text-2xl  text-blue-950 dark:text-white`}
          >
            Phone <span className=" text-customGray-500">*</span>
          </label>
          <input
            type="number"
            className={`border border-gray-100
                text-gray-500 text-base rounded-lg block w-full p-3 shadow`}
            placeholder="Your phone..."
          />
        </div>
        <div className="">
          <label
            htmlFor="message"
            className={`block mb-2 text-2xl  text-blue-950 dark:text-white`}
          >
            Message <span className=" text-customGray-500">*</span>
          </label>
          <textarea
            className={`border border-gray-100
                text-gray-500 text-base rounded-lg block w-full p-3 shadow`}
            name="message"
            id="message"
            placeholder="Your message"
            rows={"5"}
          ></textarea>
        </div>
      </div>
      <div className=" flex gap-2 items-center mt-5">
        <input type="checkbox" name="" id="" />
        <label htmlFor="" className="text-gray-500 text-base ">
          I agree to the privacy policy
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className=" mt-12 bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-14 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
