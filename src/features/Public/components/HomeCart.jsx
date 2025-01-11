import AboutInfinityLux from "./AboutInfinityLux";
import CustomerReview from "./CustomerReview";
import EventCart from "./EventCart";
import HotelArticle from "./HotelArticle";
import NewYear from "./NewYear";
import RoomAndSuite from "./RoomAndSuite";
import SubscribeBox from "./SubscribeBox";

const HomeCart = () => {
  return (
    <div>
      <AboutInfinityLux
        title1={"Experience The Ultimate"}
        title2={"Luxurious Getaway"}
        content={
          "Standing in the heart of the city, Infinity Lux invites locals and travelers alike to enjoy style and design in a soulful setting. Take a moment for yourself with stunning city skyline views, or soak up the social buzz of the city in one of our atmospheric bars."
        }
        btnText={"Explore More"}
        firstImg={"/src/assets/Hotel Profile website/image-31.png"}
        secondImg={"/src/assets/Hotel Profile website/image-30.png"}
      />
      <RoomAndSuite />
      <EventCart />
      <NewYear />
      <CustomerReview />

      <SubscribeBox />

      <HotelArticle />
    </div>
  );
};

export default HomeCart;
