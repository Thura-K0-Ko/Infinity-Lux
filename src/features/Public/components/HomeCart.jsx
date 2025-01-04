import AboutInfinityLux from "./AboutInfinityLux";
import EventCart from "./EventCart";

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
      <EventCart />
    </div>
  );
};

export default HomeCart;
