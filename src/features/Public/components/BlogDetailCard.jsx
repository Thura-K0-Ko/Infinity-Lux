// import { useParams } from "react-router-dom";

import useBlogStore from "../../../stores/useBlogStore";
import PopularCart from "./PopularCart";

const BlogDetailCard = () => {
  const blogs = useBlogStore();
  return (
    <div className=" pt-[80px] md:pt-[90px] xl:pt-40 xl:grid xl:grid-cols-3">
      <div className=" xl:col-span-2 xl:w-[739px]">
        <img
          src="/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Image1.png"
          className="h-[246px] md:h-[553px] w-full object-cover"
          alt=""
        />
        <div className="flex flex-col gap-10 md:gap-[60px] mt-6 md:mt-[52px]">
          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-4xl xl:text-[40px] font-normal font-heading ">
                What Are The Benefits Of The Spa?
              </h1>
              <p className="text-gray-500 text-base font-normal">24 Nov 2024</p>
            </div>

            <p className="text-gray-500 text-base xl:text-xl font-medium ">
              In today’s fast-paced world, finding time to relax and rejuvenate
              is essential for both your physical and mental health. A visit to
              the spa isn’t just a luxury—it’s a wellness ritual that can
              improve your overall quality of life. But what exactly makes spa
              treatments so beneficial? Let’s dive into the top reasons why a
              spa day should be on your calendar.
            </p>
            <p className="text-gray-500 text-base xl:text-xl font-medium ">
              A visit to the spa isn’t just a treat—it’s an investment in your
              well-being. From reducing stress to rejuvenating your skin, the
              benefits are undeniable. So why wait? Take time for yourself and
              book a spa day today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-11">
            <div className="">
              <img
                src="/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Foot_Message.png"
                className="h-[404px] md:h-[272px]"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Spa_Service.png"
                className="h-[404px] md:h-[272px]"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Relax.png"
                className="h-[404px] md:h-[272px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-4xl xl:text-[40px] font-normal font-heading">
              Services That You Can Get At Our Spa
              </h1>
            </div>
            <div className="">
              <p className="text-gray-500 text-base xl:text-xl font-medium ">
                At our hotel, we offer a wide range of spa services designed to
                rejuvenate your body, mind and spirit. Here are some of the key
                services of visiting our spa during your stay:
              </p>
              <ul className="text-gray-500 text-base xl:text-xl font-medium pl-2 md:pl-3 list-disc list-inside">
                <li>Massage Therapy</li>
                <li>Facials</li>
                <li>Stress Relief</li>
                <li>Detoxification</li>
                <li>Nail care</li>
                <li>Body Treatments</li>
                <li>Improved circulation</li>
              </ul>
            </div>
            <p className="text-gray-500 text-base xl:text-xl font-medium ">
              A visit to the spa isn’t just a treat—it’s an investment in your
              well-being. From reducing stress to rejuvenating your skin, the
              benefits are undeniable. So why wait?
            </p>
          </div>
        </div>
      </div>

      <div className=" pt-[80px] md:pt-[90px] xl:pt-0 xl:col-span-1 flex flex-col gap-8 ">
        <h1 className="text-customGray-500 text-5xl font-normal font-heading py-1">
          Popular posts
        </h1>
        <div className="flex flex-col gap-5 md:gap-[30px]">
          <PopularCart
            img={`/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Image2.png`}
            title={"Luxury Hotel Bathroom Collection"}
            date={"7 Dec 2024"}
          />
          <PopularCart
            img={`/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Image3.png`}
            title={" Hotel Restaurant Vs Stand alone Restaurant"}
            date={"7 Dec 2024"}
          />
          <PopularCart
            img={`/assets/Infinity Lux image Assets/11. Blog Details Page ( Infinity Lux )/Blog_Details_Image5.png`}
            title={"Luxury Hotel Bathroom Collection"}
            date={"7 Dec 2024"}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailCard;
