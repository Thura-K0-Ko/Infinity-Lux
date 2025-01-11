import { create } from "zustand";

const useOfferStore = create((set) => ({
  offers: [
    {
      id: 1,
      background: {
        backgroundImage:
          "url('/public/assets/Hotel Profile website/Frame 1000006322.png')",
      },
      discount: "30% Off",
      event: "New Year",
    },
    {
      id: 2,
      background: {
        backgroundImage:
          "url('/public/assets/Hotel Profile website/Frame 1000006323.png')",
      },
      discount: "",
      event: "",
    },
    {
      id: 3,
      background: {
        backgroundImage:
          "url('/public/assets/Hotel Profile website/Frame 1000006324.png')",
      },
      discount: "",
      event: "",
    },
  ],
}));

export default useOfferStore;
