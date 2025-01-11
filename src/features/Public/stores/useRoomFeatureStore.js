import { create } from "zustand";

const useRoomFeatureStore = create((set) => ({
  features: [
    {
      id: 1,
      svg: "/assets/Hotel Profile website/tv.svg",
      content: "Television",
    },
    {
      id: 2,
      svg: "/assets/Hotel Profile website/bath.svg",
      content: "Bathtub",
    },
    {
      id: 3,
      svg: "/assets/Hotel Profile website/sofa.svg",
      content: "Sofa",
    },
    {
      id: 4,
      svg: "/assets/Hotel Profile website/users-2-detail.svg",
      content: "1-2 People",
    },
    {
      id: 5,
      svg: "/assets/Hotel Profile website/wifi-detail.svg",
      content: "Free Wifi",
    },
    {
      id: 6,
      svg: "/assets/Hotel Profile website/air-vent.svg",
      content: "Air-Con",
    },
    {
      id: 7,
      svg: "/assets/Hotel Profile website/bed-double-detail.svg",
      content: "Twin Bed",
    },
  ],
}));

export default useRoomFeatureStore;
