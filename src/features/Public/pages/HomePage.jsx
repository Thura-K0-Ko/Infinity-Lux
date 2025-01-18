import AboutInfinityLux from "../components/AboutInfinityLux";
import CustomerReview from "../components/CustomerReview";
import HeroSection from "../components/HeroSection";
import HotelArticle from "../components/HotelArticle";
import MeetingAndEventCart from "../components/MeetingAndEventCart";
import NewYear from "../components/NewYear";
import RoomAndSuite from "../components/RoomAndSuite";
import SubscribeBox from "../components/SubscribeBox";

const HomePage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (2).png"
        }
        subtitle={"Curated For You"}
        titles={["Enjoy The Best", "Movements Of Life"]}
        btnText={"Rooms & Suites"}
        path={"/rooms"}
      />
      <AboutInfinityLux
        title1={"Experience The Ultimate"}
        title2={"Luxurious Getaway"}
        content={
          "Standing in the heart of the city, Infinity Lux invites locals and travelers alike to enjoy style and design in a soulful setting. Take a moment for yourself with stunning city skyline views, or soak up the social buzz of the city in one of our atmospheric bars."
        }
        btnText={"Explore More"}
        firstImg={"/assets/Hotel Profile website/image-31.png"}
        secondImg={"/assets/Hotel Profile website/image-30.png"}
        className={"py-2"}
      />
      <RoomAndSuite />
      <MeetingAndEventCart />
      <NewYear />
      <CustomerReview />
      <HotelArticle />
      <SubscribeBox />
    </section>
  );
};

export default HomePage;
