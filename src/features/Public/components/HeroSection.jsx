import Container from "../../../components/Container";
import Header from "./Header";

const HeroSection = ({ heroImg, subtitle, titles, btnText }) => {
  console.log(titles);
  return (
    <div className="relative lg:min-h-[580px] xl:min-h-[680px] 2xl:min-h-[754px] flex flex-col items-center justify-center">
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
          <p className="text-gray-200 text-2xl font-medium mb-6">{subtitle}</p>
          <div className="mb-[60px] flex flex-col items-center">
            {titles &&
              titles.map((title) => (
                <h1
                  key={title}
                  className="text-white lg:text-6xl xl:text-7xl 2xl:text-8xl  font-heading font-normal"
                >
                  {title}
                </h1>
              ))}
          </div>

          {btnText && (
            <button className=" lg:px-8   2xl:px-10  lg:py-4  2xl:py-5 border-2  border-white text-white text-2xl font-semibold hover:bg-white hover:text-black transition-colors rounded">
              {btnText}
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
