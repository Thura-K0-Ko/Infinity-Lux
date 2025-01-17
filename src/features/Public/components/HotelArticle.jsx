import Container from "../../../components/Container";
import ArticleCard from "./ArticleCard";
import useBlogStore from "../../../stores/useBlogStore";

const HotelArticle = () => {
  const { blogs } = useBlogStore();
  console.log(blogs)
  return (
    <section>
      <div className=" py-40 bg-customGray-500 ">
        <Container>
          <div className="flex flex-col items-center gap-16">
            <div className=" flex flex-col items-center gap-6">
              <p className=" text-customPurple-500 text-2xl font-medium">
                Latests News
              </p>
              <h3 className="text-white text-5xl font-normal font-heading">
                Hotel Articles
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {blogs.slice(0, 3).map((blog) => (
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
