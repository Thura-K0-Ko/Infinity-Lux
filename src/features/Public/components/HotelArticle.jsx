import Container from "../../../components/Container";
import ArticleCard from "./ArticleCard";
import useBlogStore from "../../../stores/useBlogStore";

const HotelArticle = () => {
  const { blogs } = useBlogStore();
  console.log(blogs);
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
              <div className="col-span-1">
                <div className="  rounded-lg">
                  <img
                    src="/src/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Hotel_artical_image.png"
                    className=" h-[298px] w-full object-cover rounded-t-lg"
                    alt=""
                  />
                  <div className="p-5 flex flex-col gap-5 bg-white rounded-b-lg">
                    <h2 className=" font-heading text-customGray-500 text-3xl font-normal">
                      What is the meaning of deluxe room?
                    </h2>
                    <p className="text-gray-500 text-xl font-medium">
                      A deluxe room strikes a balance between affordability and
                      luxury, making it a ...
                    </p>
                    <div className=" flex items-center justify-between">
                      <p className="text-customGray-500 text-xl font-medium">
                        {" "}
                        12 Nov 24
                      </p>
                      <Link
                        to={"about-us"}
                        className=" flex items-center gap-3 text-customGray-500 text-xl font-medium p-2   transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
                      >
                        <span>Read More</span>
                        <HiArrowSmallRight className=" size-7" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                {" "}
                <div className="  rounded-lg">
                  <img
                    src="/src/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Hotel_artical_image.png"
                    className=" h-[298px] w-full object-cover rounded-t-lg"
                    alt=""
                  />
                  <div className="p-5 flex flex-col gap-5 bg-white rounded-b-lg">
                    <h2 className=" font-heading text-customGray-500 text-3xl font-normal">
                      What is the meaning of deluxe room?
                    </h2>
                    <p className="text-gray-500 text-xl font-medium">
                      A deluxe room strikes a balance between affordability and
                      luxury, making it a ...
                    </p>
                    <div className=" flex items-center justify-between">
                      <p className="text-customGray-500 text-xl font-medium">
                        {" "}
                        12 Nov 24
                      </p>
                      <Link
                        to={"about-us"}
                        className=" flex items-center gap-3 text-customGray-500 text-xl font-medium p-2   transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
                      >
                        <span>Read More</span>
                        <HiArrowSmallRight className=" size-7" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                {" "}
                <div className="  rounded-lg">
                  <img
                    src="/src/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Hotel_artical_image.png"
                    className=" h-[298px] w-full object-cover rounded-t-lg"
                    alt=""
                  />
                  <div className="p-5 flex flex-col gap-5 bg-white rounded-b-lg">
                    <h2 className=" font-heading text-customGray-500 text-3xl font-normal">
                      What is the meaning of deluxe room?
                    </h2>
                    <p className="text-gray-500 text-xl font-medium">
                      A deluxe room strikes a balance between affordability and
                      luxury, making it a ...
                    </p>
                    <div className=" flex items-center justify-between">
                      <p className="text-customGray-500 text-xl font-medium">
                        {" "}
                        12 Nov 24
                      </p>
                      <Link
                        to={"about-us"}
                        className=" flex items-center gap-3 text-customGray-500 text-xl font-medium p-2   transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
                      >
                        <span>Read More</span>
                        <HiArrowSmallRight className=" size-7" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
