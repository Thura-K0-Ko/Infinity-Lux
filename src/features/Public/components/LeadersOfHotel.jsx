import React from "react";
import Container from "../../../components/Container";

const LeadersOfHotel = () => {
  const leaders = [
    {
      id: 1,
      name: "Milly Alcock",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image1.png",
      position: "Chief Executive Officer",
    },
    {
      id: 2,
      name: "Frank Grillo",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image2.png",

      position: "CEO, Co Founder",
    },
    {
      id: 3,
      name: "Sara Sampaio",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image3.png",
      position: "Chief Operating Officer",
    },
  ];

  return (
    <section>
      <div className="bg-[#F2F0ED]">
        <Container>
          <div className=" mx-auto flex justify-center items-center md:placeholder-cyan-900 py-[90px] xl:py-40">
            <div className=" flex flex-col w-[1280px] gap-[40px] xl:gap-[60px]">
              <div className="flex flex-col justify-center items-center gap-6">
                <p className=" text-customPurple-500 text-base xl:text-2xl">
                  Meet The Team
                </p>
                <p className="font-heading text-customGray-500 text-[40px] xl:text-5xl">
                  Our Leaders
                </p>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                {leaders.slice(0, 3).map(({ id, name, image, position }) => (
                  <>
                    {/* ----------for xl screen------------ */}
                    <div
                      key={id}
                      className="hidden xl:flex xl:flex-col bg-white"
                    >
                      <img src={image} alt="" className="h-[467px]" />
                      <div className="flex flex-col items-center gap-3 py-8">
                        <p className="text-customGray-500 text-center font-heading text-[32px]">
                          {name}
                        </p>
                        <p className="text-gray-500 text-2xl  text-center">
                          {position}
                        </p>
                      </div>
                    </div>
                  </>
                ))}

                {leaders.slice(0, 2).map(({ id, name, image, position }) => (
                  <>
                    {/* ----------for md screen------------ */}

                    <div key={id} className=" flex flex-col xl:hidden bg-white">
                      <img src={image} alt="" className="h-[422px]" />
                      <div className="flex flex-col items-center gap-3 py-[30px]">
                        <p className="text-customGray-500 text-center font-heading text-[29px]">
                          {name}
                        </p>
                        <p className="text-gray-500 text-[22px]  text-center">
                          {position}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default LeadersOfHotel;
