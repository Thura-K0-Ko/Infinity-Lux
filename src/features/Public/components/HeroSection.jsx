import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import Header from "./Header";
import Breadcrumb from "../../../components/Breadcrumb";

const HeroSection = ({
  heroImg,
  subtitle,
  titles,
  btnText,
  path,
  breadcrumbs,
  className,
}) => {
  return (
    <div
      className={`relative md:min-h-[424px] xl:min-h-[754px] flex flex-col items-center justify-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury hotel room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Header />

      {/* Hero Content */}

      <Container>
        <div className=" flex flex-col items-center text-white relative z-10">
          <p className="text-gray-200 text-2xl md:text-base xl:text-2xl font-medium mb-8">
            {subtitle}
          </p>
          <div className=" flex flex-col items-center gap-4 ">
            {titles &&
              titles.map((title) => (
                <h1
                  key={title}
                  className="text-white text-[40px] md:text-5xl xl:text-8xl  font-heading font-normal"
                >
                  {title}
                </h1>
              ))}
          </div>

          {breadcrumbs &&
            breadcrumbs.map((breadcrumb, index) => (
              <Breadcrumb
                key={index}
                currentPageTitle={breadcrumb.currentPageTitle}
                links={[
                  {
                    path: breadcrumb.path,
                    name: breadcrumb.name,
                  },
                ]}
              />
            ))}
          {btnText && (
            <Link
              to={path}
              className="xl:mt-[60px] md:px-5 md:py-2.5 xl:px-10 xl:py-5 border  border-white text-white md:text-base xl:text-2xl font-semibold hover:bg-white hover:text-black transition-colors rounded"
            >
              {btnText}
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
