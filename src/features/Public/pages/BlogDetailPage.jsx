import React from "react";
import BlogDetailCard from "../components/BlogDetailCard";
import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Container from "../../../components/Container";
import RelatedArticle from "../components/RelatedArticle";

const BlogDetailPage = () => {
  const id = useParams();
  console.log(id);
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Hero_Image.png"
        }
        titles={["What are The", "Benefits Of The Spa?"]}
        breadcrumbs={[
          {
            currentPageTitle: "Blog Details",
            path: "/blogs",
            name: "Blogs",
          },
        ]}
      />
      <Container>
        <BlogDetailCard />
        <RelatedArticle />
      </Container>
    </section>
  );
};

export default BlogDetailPage;
