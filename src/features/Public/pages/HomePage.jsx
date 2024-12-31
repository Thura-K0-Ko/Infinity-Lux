import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (2).png"
        }
        subtitle={"Create For You"}
        titles={["Enjoy The Best", "Movements Of Life"]}
        btnText={"Rooms & Suites"}
      />
    </section>
  );
};

export default HomePage;
