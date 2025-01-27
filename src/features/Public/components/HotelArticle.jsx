import Container from "../../../components/Container";
import ArticleCard from "./ArticleCard";
import useBlogStore from "../../../stores/useBlogStore";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

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
              className="flex gap-5 w-full h-[513px] xl:h-[560px]  overflow-scroll"
            >
              {blogs.map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2  md:gap-3 mt-4 md:mt-12 ">
            <Link
              onClick={prevSlide}
              className="bg-customPurple-500  text-white p-2 rounded-full  hover:bg-customPurple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            >
              <HiArrowSmallLeft className="size-5 md:size-7" />
            </Link>

            <Link
              onClick={nextSlide}
              className="bg-customPurple-500 text-white p-2 rounded-full  hover:bg-customPurple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            >
              <HiArrowSmallRight className=" size-5 md:size-7" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HotelArticle;
