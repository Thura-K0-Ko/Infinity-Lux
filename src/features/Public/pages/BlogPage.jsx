import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import HeroSection from "../components/HeroSection";

const BlogPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (2).png"
        }
        titles={["Blog"]}
      />
    </section>
  );
};

export default BlogPage;
