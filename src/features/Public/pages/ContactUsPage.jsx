import React from "react";
import HeroSection from "../components/HeroSection";
import GetInTouch from "../components/GetInTouch";
import LocationMap from "../components/LocationMap";
import ContactUsFaq from "../components/ContactUsFaq";

const ContactUsPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Infinity Lux image Assets/9. Contact Us ( Infinity Lux )/Contact_Us_Hero_image.png"
        }
        // titles={["Contact Us"]}
        // className={
        //   " after:w-full after:border-[100px] after:bottom-0 after:right-0 after:absolute after:border-l-transparent after:border-t-transparent after:border-r-white after:border-b-white border-r-white after:z-[10]"
        // }
      />
      <GetInTouch />
      <LocationMap />
      <ContactUsFaq />
    </section>
  );
};

export default ContactUsPage;
