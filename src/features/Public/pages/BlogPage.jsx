import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (2).png"
        }
        titles={["Blog"]}
      />
      <BlogCard />
    </section>
  );
};

export default BlogPage;
