import React from "react";

const LeadersOfHotel = () => {
  const leaders = [
    {
      id: 1,
      name: "Milly Alcock",
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image1.png",
      position: "Chief Executive Officer",
    },
    {
      id: 2,
      name: "Frank Grillo",
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image2.png",

      position: "CEO, Co Founder",  
    },
    {
      id: 3,
      name: "Sara Sampaio",
      image: "/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image3.png",
      position: "Chief Operating Officer",
    },
  ];

  return (
    <div className="bg-[#F2F0ED] mx-auto flex justify-center items-center py-40 px-[116px]">
      <div className=" flex flex-col w-[1280px] gap-[60px]">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-body text-customPurple-500 font-[500] text-2xl">
            Meet The Team
          </p>
          <p className="font-heading text-[#141414] text-5xl font-[400] capitalize">
            Our Leaders
          </p>
        </div>
        <div className="flex justify-center items-center gap-[21px]">
          {leaders.map(({id, name,image, position }) => (
            <div key={id} className="flex w-[413px] flex-col bg-[#FFF]">
              <img
                src={image}
                alt=""
                className="h-[467px]"
              />
              <div className="flex flex-col items-center p-8">
                <p className="text-[#141414] text-center font-heading text-[32px] font-[400] capitalize">
                  {name}
                </p>
                <p className="text-[#6B7280] font-body text-2xl font-[400] capitalize text-center">
                  {position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadersOfHotel;
