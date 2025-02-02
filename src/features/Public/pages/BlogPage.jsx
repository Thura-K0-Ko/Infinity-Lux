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
          "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog_Hero_Image.png"
        }
        // titles={["Blog"]}
      />
      <BlogCard />
    </section>
  );
};

export default BlogPage;
