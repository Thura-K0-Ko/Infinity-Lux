import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-customPurple-500 mt-auto">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-8 xl:grid-cols-4 gap-10 md:gap-0 pt-10 md:pt-8 xl:pt-5">
          <div className="col-span-3 xl:col-span-2 flex flex-col gap-5">
            <Link to="/" className=" hover:opacity-80">
              <img
                src="/assets/Hotel Profile website/Lux 2.svg"
                className=" h-[40px] md:h-[50px] xl:h-[69px] "
                alt="Lux 2 logo"
              />
            </Link>

            <div className=" flex flex-col gap-3 xl:gap-5 text-gray-300 text-base  xl:text-xl font-light ">
              <p className="">
                {" "}
                Address : No 101, Kan Street, Hlaing, Township, Yangon, 
                Myanmar, 11051
              </p>
              <p className="">Email : infinitylux@gmail.com</p>
              <p>Phone : +959756895143</p>
              <p>Phone : +959756895143</p>
            </div>
          </div>
          <div className=" col-span-2 xl:col-span-1">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-2xl font-normal font-heading text-nowrap">
                {" "}
                Corporate Sites
              </h4>
              <div className=" flex flex-col gap-3 text-gray-300 text-base xl:text-xl font-light ">
                <Link
                  to={"/about-us"}
                  className=" hover:text-white hover:underline"
                >
                  About Us
                </Link>
                <Link
                  to={"/contact-us"}
                  className=" hover:text-white hover:underline"
                >
                  Contact Us
                </Link>
                <Link
                  to={"/faqs"}
                  className=" hover:text-white hover:underline"
                >
                  Faqs
                </Link>
                <Link
                  to={"/blog"}
                  className=" hover:text-white hover:underline"
                >
                  Blog
                </Link>
                <Link
                  to={"/terms-and-conditions"}
                  className=" hover:text-white hover:underline"
                >
                  Terms & condition
                </Link>
                <Link
                  to={"/privacy-policy"}
                  className=" hover:text-white hover:underline"
                >
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-span-3 xl:col-span-1">
            <div className=" flex flex-col gap-9">
              <div className="flex flex-col gap-5">
                <h4 className="text-white text-2xl font-normal font-heading">
                  {" "}
                  App available on
                </h4>
                <div className=" flex flex-col gap-3 text-gray-300 text-xl font-light ">
                  <div className="flex justify-start  md:justify-between gap-16 md:gap-0 items-center ps-2">
                    <Link
                      to={"https://www.google.com/"}
                      target="_blank"
                      className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-opacity-40"
                    >
                      <img
                        src="/assets/Infinity Lux image Assets/Footer Logo/google-play.svg.svg"
                        className=" h-[30px] xl:h-10"
                        alt=""
                      />
                    </Link>
                    <Link
                      to={"https://www.apple.com/app-store/"}
                      target="_blank"
                      className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-opacity-40"
                    >
                      <img
                        src="/assets/Infinity Lux image Assets/Footer Logo/app-store.svg.svg"
                        className=" h-[30px] xl:h-10"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col gap-5">
                <h4 className="text-white text-2xl font-normal font-heading">
                  {" "}
                  Follow On:
                </h4>
                <div className=" flex flex-col gap-3 text-gray-300 text-xl font-light ">
                  <div className="flex justify-between items-center">
                    <Link
                      to={"https://www.facebook.com/"}
                      className="p-2 bg-[#1877f2] rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-opacity-40"
                      target="_blank"
                    >
                      <img
                        src="/assets/Infinity Lux image Assets/Footer Logo/ri_facebook-fill.png"
                        className=" h-6 "
                        alt=""
                      />
                    </Link>
                    <Link
                      to={"https://twitter.com/"}
                      className=" p-2 bg-black text-white hover:bg-black-800 focus:ring-4 focus:ring-black-300 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none dark:focus:ring-black-800 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-opacity-40"
                      target="_blank"
                    >
                      <img
                        src="/assets/Infinity Lux image Assets/Footer Logo/devicon_twitter.png"
                        className=" h-6"
                        alt=""
                      />
                    </Link>
                    <Link
                      to={"https://www.instagram.com/"}
                      className="p-2 bg-gradient-to-tl from-yellow-500 via-pink-500 to-purple-600   rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-opacity-40"
                      target="_blank"
                    >
                      <img
                        src="/assets/Infinity Lux image Assets/Footer Logo/mdi_instagram.png"
                        className=" h-6"
                        alt=""
                      />
                    </Link>
                    <Link
                      to={"https://www.linkedin.com/"}
                      className=" p-2 bg-[#0076b2] rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-opacity-40"
                      target="_blank"
                    >
                      <img
                        src="/assets/Infinity Lux image Assets/Footer Logo/dashicons_linkedin.svg"
                        className=" h-6"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-10 border-t-2 border-white ">
        <Container>
          <div className="flex items-center justify-between py-8 xl:py-5">
            <p className="text-gray-300 text-base xl:text-xl font-light">
              Copyrights ©2024 Hotel Name
            </p>
            <p className="text-gray-300 text-base xl:text-xl font-light">Manage Cookies</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
