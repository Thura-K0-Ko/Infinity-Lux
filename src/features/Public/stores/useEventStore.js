import { create } from "zustand";

const useEventStore = create((set) => ({
  events: [
    {
      id: 1,
      img: "/public/assets/Hotel Profile website/image-14.png",
      display: "Let’s Meet",
      title: "Meeting Event",
      description:
        "Host your events in residential-style venues with daylight filled spaces, access to a show kitchen, Garden Terrace and a ballroom. Enjoy personalized culinary menus, prime location, and cutting-edge technology perfect for board meetings, dinners and conferences.",
    },
    {
      id: 2,
      img: "/public/assets/Hotel Profile website/image-13.png",
      display: "Where Your Marriage Journey Begins",
      title: "Wedding Event",
      description:
        "Whether an intimate dinner or a spectacular standing cocktail reception for up to 700 people, this residential-style venue is ideal for all types of weddings. Our dedicated team of wedding planners will assist you  in planning every detail of your big day ....",
    },
  ],
}));

export default useEventStore;
