import { create } from "zustand";

const useRoomFeatureStore = create((set) => ({
   features: [
      {
         id: 1,
         svg: "/src/assets/Hotel Profile website/tv.svg",
         content: "Television",
      },
      {
         id: 2,
         svg: "/src/assets/Hotel Profile website/bath.svg",
         content: "Bathtub",
      },
      {
         id: 3,
         svg: "/src/assets/Hotel Profile website/sofa.svg",
         content: "Sofa",
      },
      {
         id: 4,
         svg: "/src/assets/Hotel Profile website/users-2-detail.svg",
         content: "1-2 People",
      },
      {
         id: 5,
         svg: "/src/assets/Hotel Profile website/wifi-detail.svg",
         content: "Free Wifi",
      },
      {
         id: 6,
         svg: "/src/assets/Hotel Profile website/air-vent.svg",
         content: "Air-Con",
      },
      {
         id: 7,
         svg: "/src/assets/Hotel Profile website/bed-double-detail.svg",
         content: "Twin Bed",
      },
      {
         id: 8,
         svg: "/src/assets/Hotel Profile website/axis-3d-detail.svg",
         content: "",
      }
   ],
}));

export default useRoomFeatureStore;
