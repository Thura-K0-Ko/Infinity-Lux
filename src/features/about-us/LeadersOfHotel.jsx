import React from "react";

const LeadersOfHotel = () => {
  const leaders = [
    {
      id: 1,
      name: "Milly Alcock",
      image: "/src/assets/Hotel Profile website/image-27.png",
      position: "Chief Executive Officer",
    },
    {
      id: 2,
      name: "Frank Grillo",
      image: "/src/assets/Hotel Profile website/image-26.png",

      position: "CEO, Co Founder",  
    },
    {
      id: 3,
      name: "Sara Sampaio",
      image: "/src/assets/Hotel Profile website/image-25.png",
      position: "Chief Operating Officer",
    },
  ];

  return (
    <div className="bg-[#F2F0ED] mx-auto flex justify-center items-center py-40 px-[116px]">
      <div className=" flex flex-col w-[1280px] gap-[60px]">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-sans text-customPurple font-[500] text-2xl">
            Meet The Team
          </p>
          <p className="font-serif text-[#141414] text-5xl font-[400] capitalize">
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
                <p className="text-[#141414] text-center font-serif text-[32px] font-[400] capitalize">
                  {name}
                </p>
                <p className="text-[#6B7280] font-sans text-2xl font-[400] capitalize text-center">
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
