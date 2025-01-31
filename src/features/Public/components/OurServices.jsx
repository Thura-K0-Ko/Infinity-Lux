import React from "react";
import Container from "../../../components/Container";

const OurServices = () => {
  const services = [
    {
      id: 1,
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/baggage-claim.svg",
      title: "Pick Up & Drop",
      description:
        "Whether arriving or departing, enjoy the comfort of personalized transportation with a smooth and stress-free journey.",
    },
    {
      id: 2,
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/dumbbell.svg",
      title: "Fitness",
      description:
        "Stay energized in our state-of-the-art fitness center, equipped with the latest technology.",
    },
    {
      id: 3,
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/parking-square.svg",
      title: "Parking Space",
      description:
        "Enjoy the convenience of secure, spacious car parking at our luxury hotel With valet services.",
    },
    {
      id: 4,
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/utensils.svg",
      title: "Breakfast",
      description:
        "Start your day with an exquisite breakfast experience, featuring a curated selection of gourmet dishes.",
    },
    {
      id: 5,
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/wifi-detail.svg",
      title: "Free Wifi",
      description:
        "Stay connected effortlessly with our complimentary high-speed Wi-Fi, available throughout the hotel.",
    },
    {
      id: 6,
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/waves.svg",
      title: "Swimming Pool",
      description:
        "Experience ultimate relaxation at our luxurious swimming pool, where elegance meets tranquility.",
    },
  ];
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-center items-center py-[50px] md:py-[90px] xl:py-40">
          <div className="flex flex-col justify-center items-center gap-[60px]">
            <div className="flex flex-col justify-center items-center gap-6">
              <p className=" text-customPurple-500 text-base xl:text-2xl">
                Our Services
              </p>
              <p className="font-heading text-customGray-500 text-[40px] xl:text-5xl font-[400]">
                Hotel Facilities
              </p>
            </div>
            {/* <div className="inline-flex flex-col items-start gap-8 w-[1279px]"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8">
              {services.map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className="flex  flex-col p-[28.98px] xl:p-8 items-start gap-[14.49px] xl:gap-4 bg-[#F2F0ED]"
                >
                  <img src={image} className="h-[36.22px]" alt="" />

                  <p className="text-customGray-500 font-heading text-xl xl:text-2xl">
                    {title}
                  </p>
                  <p className="text-[#6B7280] text-base  xl:text-xl">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
