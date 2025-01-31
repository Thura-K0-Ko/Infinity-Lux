import Container from "../../../components/Container";
import ArticleCard from "./ArticleCard";
import useBlogStore from "../../../stores/useBlogStore";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";

const HotelArticle = () => {
  const { blogs } = useBlogStore();

  const carouselRef = useRef();
  const nextSlide = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth + 16; // Includes gap between slides
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      console.log(carouselRef.current);
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth + 16; // Includes gap between slides
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className=" py-[44px] md:py-[90px] xl:py-40 bg-customGray-500 ">
        <Container>
          <div className="flex flex-col items-center gap-10 md:gap-16 overflow-hidden">
            <div className=" flex flex-col items-center gap-4 md:gap-6">
              <p className=" text-customPurple-500 text-base xl:text-2xl font-medium">
                Latests News
              </p>
              <h3 className="text-white text-[40px]  xl:text-5xl font-normal font-heading">
                Hotel Articles
              </h3>
            </div>
            <div
              ref={carouselRef}
              className="flex gap-5 w-full hsb  overflow-x-scroll"
            >
              {blogs.map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <div className=" flex xl:hidden items-center justify-center gap-2 md:gap-3 mt-4 md:mt-12  ">
            <button
              onClick={prevSlide}
              className=" cursor-pointer bg-customPurple-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            ></button>
            <button
            
              className=" bg-white   p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            ></button>
            <button
              onClick={nextSlide}
              className=" cursor-pointer bg-customPurple-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            ></button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HotelArticle;
