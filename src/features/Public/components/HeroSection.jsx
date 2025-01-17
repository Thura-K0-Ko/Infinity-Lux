import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import Header from "./Header";

const HeroSection = ({ heroImg, subtitle, titles, btnText, path }) => {
  return (
    <div className="relative md:min-h-[424px] xl:min-h-[754px] flex flex-col items-center justify-center">
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
        <div className=" flex flex-col items-center text-white relative z-10 mt-20">
          <p className="text-gray-200 text-2xl md:text-base xl:text-2xl font-medium mb-6">
            {subtitle}
          </p>
          <div className="mb-[60px] flex flex-col items-center">
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

          {btnText && (
            <Link
              to={path}
              className=" md:px-5 md:py-2.5 xl:px-10 xl:py-5 border  border-white text-white md:text-base xl:text-2xl font-semibold hover:bg-white hover:text-black transition-colors rounded"
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
