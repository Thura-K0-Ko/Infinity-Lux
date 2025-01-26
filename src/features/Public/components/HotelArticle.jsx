import Container from "../../../components/Container";
import ArticleCard from "./ArticleCard";
import useBlogStore from "../../../stores/useBlogStore";

const HotelArticle = () => {
  const { blogs } = useBlogStore();
  console.log(blogs);
  return (
    <section>
      <div className=" py-[44px] md:py-[90px] xl:py-40 bg-customGray-500 ">
        <Container>
          <div className="flex flex-col items-center gap-10 md:gap-16">
            <div className=" flex flex-col items-center gap-4 md:gap-6">
              <p className=" text-customPurple-500 text-base xl:text-2xl font-medium">
                Latests News
              </p>
              <h3 className="text-white text-[40px]  xl:text-5xl font-normal font-heading">
                Hotel Articles
              </h3>
            </div>
            <div className="hidden xl:grid xl:grid-cols-3 gap-5">
              {blogs.slice(0, 3).map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-2 xl:hidden gap-5">
              {blogs.slice(0, 2).map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="md:hidden gap-5">
              {blogs.slice(0, 1).map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HotelArticle;
