import React from "react";
import useBlogStore from "../../../stores/useBlogStore";
import ArticleCard from "./ArticleCard";
import Container from "../../../components/Container";
import Pagination from "../../../components/Pagination";

const BlogCard = () => {
  const { blogs } = useBlogStore();
  return (
    <div className=" py-[80px] md:py-[90px] xl:py-40">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <ArticleCard key={blog.id} blog={blog} />
          ))}
        </div>
        <Pagination />
      </Container>
    </div>
  );
};

export default BlogCard;
