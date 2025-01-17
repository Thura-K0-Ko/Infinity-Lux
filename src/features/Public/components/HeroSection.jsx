import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import Header from "./Header";

const HeroSection = ({ heroImg, subtitle, titles, btnText, path }) => {
  return (
    <div className="relative lg:min-h-[580px] xl:min-h-[754px] flex flex-col items-center justify-center">
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
          {subtitle && (
            <p className="text-gray-200 text-2xl font-medium mb-6">
              {subtitle}
            </p>
          )}
          <div className=" flex flex-col items-center gap-5 py-5">
            {titles &&
              titles.map((title) => (
                <h1
                  key={title}
                  className="text-white lg:text-6xl xl:text-8xl  font-heading font-normal"
                >
                  {title}
                </h1>
              ))}
          </div>

          {btnText && (
            <Link
              to={path}
              className=" lg:px-8 mt-14  2xl:px-10  lg:py-4  2xl:py-5 border-2  border-white text-white text-2xl font-semibold hover:bg-white hover:text-black transition-colors rounded"
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
