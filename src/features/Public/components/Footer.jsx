import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-customPurple mt-auto">
      <Container>
        <div className=" grid grid-cols-4 py-5">
          <div className="col-span-2">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-2xl font-normal font-heading"> Infinity Lux</h4>
              <div className=" flex flex-col gap-3 text-gray-300 text-xl font-light ">
                <p className="">
                  {" "}
                  Address : No 101, Kan Street, Hlaing, Township, Yangon, <br />
                  Myanmar, 11051
                </p>
                <p className="">Email : infinitylux@gmail.com</p>
                <p>Phone : +959756895143</p>
                <p>Phone : +959756895143</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-2xl font-normal font-heading">
                {" "}
                Corporate Sites
              </h4>
              <div className=" flex flex-col gap-3 text-gray-300 text-xl font-light ">
                <Link to={"/about-us"}>About Us</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
                <Link to={"/faqs"}>Faqs</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={""}>Terms & condition</Link>
                <Link to={"/privacy-policy"}>Privacy policy</Link>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-2xl font-normal font-heading">
                {" "}
                App available on
              </h4>
              <div className=" flex flex-col gap-3 text-gray-300 text-xl font-light ">
                <div className="flex justify-between items-center">
                  <img src="/src/assets/Infinity Lux image Assets/Footer Logo/google-play.svg.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
