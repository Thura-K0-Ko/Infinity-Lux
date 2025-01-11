import React, { useEffect, useRef, useState } from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      position: "Property consultation",
      image: "/src/assets/Hotel Profile website/Ellipse 13.png",
      review: ` I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience. From the moment I walked into their office, I felt welcomed and supported by their friendly team of professionals. `,
    },
    {
      id: 2,
      name: "Esther Howard",
      position: "Property consultation",
      image: "/src/assets/Hotel Profile website/Ellipse 13 (1).png",
      review: ` Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.`,
    },
    {
      id: 3,
      name: "Sarah M.",
      position: "Property consultation",
      image: "/src/assets/Hotel Profile website/Ellipse 13.png",
      review: `My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking for in a home and was always available to answer any questions I had throughout the process. Her knowledge of the local real estate market was`,
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const updateMaxIndex = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        const cardWidth = 392 + 16; // card width + gap
        setMaxIndex(Math.max(0, reviews.length - Math.floor(containerWidth / cardWidth)));
      }
    };

    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  
  return (
    <div className="flex py-[170px] pr-0 pl-[116px] bg-[#FFF] overflow-hidden">
      <div className="flex items-center gap-12">
        <div className="flex w-[451px] flex-col items-start gap-12">
          <p className="text-[#010101] font-serif text-[68px] font-[400] leading-[111.023%] tracking-[-3.818px] capitalize">
            Our customers think we’re the best
          </p>
          <div>
            <div className="flex gap-[15px]">
              <div className="relative" onClick={prevSlide}>
                <img
                  src="/src/assets/Hotel Profile website/Ellipse 12 (1).svg"
                  alt=""
                  className=""
                />
                <img
                  src="/src/assets/Hotel Profile website/arrow01.svg (1).svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="relative" onClick={nextSlide}>
                <img
                  src="/src/assets/Hotel Profile website/Ellipse 12.svg"
                  alt=""
                  className=""
                />
                <img
                  src="/src/assets/Hotel Profile website/arrow01.svg.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={sliderRef}
        className="relative flex-1 overflow-hidden ml-12"
      >
        <div 
          className="flex items-center  gap-4 transition-transform duration-300 ease-in-out absolute"
          style={{ transform: `translateX(-${currentIndex * (392 + 16)}px)` }}
        >
        {reviews.map(({ id , name , position , image , review}) => (
          <div key={id} className="w-[392px] h-full flex flex-col flex-grow  p-10">
            <div className=" flex h-full flex-col gap-2">
            <div className="flex justify-between">
              <img src="/src/assets/Hotel Profile website/Black.svg" alt="" />
              <img
                src="/src/assets/Hotel Profile website/Group 54.svg"
                alt=""
              />
            </div>
            <div>
              <p className="text-[#6B7280] font-sans text-lg font-[400] leading-[146.523%]">
                {review}
              </p>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex gap-3 items-center">
                <img
                  src="/src/assets/Hotel Profile website/Ellipse 13.png"
                  alt=""
                />
                <div>
                  <p className="text-[#010101] font-serif text-lg font-[400] leading-[146.523%] ">
                    {name}
                  </p>
                  <p className="text-[#6B7280] font-sans text-sm font-[400] leading-[146.523%]">
                    {position}
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/src/assets/Hotel Profile website/Black 2.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        ))}
        </div>
        </div>

    </div>
  );
};

export default CustomerReviews;
