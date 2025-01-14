import Container from "../../../components/Container";
import useBlogStore from "../../../stores/useBlogStore";
import ArticleCard from "./ArticleCard";

const RelatedArticle = () => {
  const { blogs } = useBlogStore();
  return (
    <section>
      <div className=" py-40 bg-white ">
        <Container>
          <div className="flex flex-col items-center gap-16">
            <h3 className="text-customGray-500 text-5xl font-normal font-heading">
              Related Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {blogs.slice(3, 6).map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default RelatedArticle;
