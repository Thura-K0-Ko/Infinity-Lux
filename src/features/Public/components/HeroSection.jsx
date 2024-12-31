import Header from "./Header";

const HeroSection = ({ heroImg, subtitle, titles, btnText }) => {
  console.log(titles);
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
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

      <div className=" flex flex-col items-center text-white relative z-10">
        <p className="text-xl mb-4">{subtitle}</p>
        {titles &&
          titles.map((title) => (
            <h1
              key={title}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            >
              <span className="font-semibold">{title}</span>
            </h1>
          ))}

        {btnText && (
          <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded">
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
