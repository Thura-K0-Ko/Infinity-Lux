import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/baggage-claim.svg",
      title: "Pick Up & Drop",
      description:
        "Whether arriving or departing, enjoy the comfort of personalized transportation with a smooth and stress-free journey.",
    },
    {
      id: 2,
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/dumbbell.svg",
      title: "Fitness",
      description:
        "Stay energized in our state-of-the-art fitness center, equipped with the latest technology.",
    },
    {
      id: 3,
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/parking-square.svg",
      title: "Parking Space",
      description:
        "Enjoy the convenience of secure, spacious car parking at our luxury hotel With valet services.",
    },
    {
      id: 4,
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/utensils.svg",
      title: "Breakfast",
      description:
        "Start your day with an exquisite breakfast experience, featuring a curated selection of gourmet dishes.",
    },
    {
      id: 5,
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/wifi-detail.svg",
      title: "Free Wifi",
      description:
        "Stay connected effortlessly with our complimentary high-speed Wi-Fi, available throughout the hotel.",
    },
    {
      id: 6,
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/waves.svg",
      title: "Swimming Pool",
      description:
        "Experience ultimate relaxation at our luxurious swimming pool, where elegance meets tranquility.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-40 px-[116px]">
      <div className="flex flex-col justify-center items-center gap-[60px]">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-body text-customPurple-500 font-[500] text-2xl">
            Our Services
          </p>
          <p className="font-heading text-[#141414] text-5xl font-[400] capitalize">
            Hotel Facilities
          </p>
        </div>
        <div className="inline-flex flex-col items-start gap-8 w-[1279px]">
            <div className="grid grid-cols-3 gap-8">
            {services.map(({ id, image, title, description }) => (
                <div key={id} className="inline-flex w-[413px] p-8 flex-col items-start gap-[10px] bg-[#F2F0ED]">
                <div className="flex flex-col items-start gap-4">
                    <img
                    src={image}
                    alt=""
                    />
                    <div className="flex flex-col gap-4">
                    <p className="text-[#141414] font-heading text-2xl font-[400] capitalize">
                        {title}
                    </p>
                    <p className="text-[#6B7280] font-body text-xl font-[400]">
                        {description}
                    </p>
                    </div>
                </div>
                </div>
          ))}
            </div>
     
        </div>
      </div>
    </div>
  );
};

export default OurServices;
