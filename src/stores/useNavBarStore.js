import { create } from "zustand";

const useNavBarStore = create((set) => ({
  navBars: [
    {
      id: 1,
      name: "Home",
      isActive: true,
    },
    {
      id: 2,
      name: "Rooms",
      isActive: false,
    },
    {
      id: 3,
      name: "Events",
      isActive: false,
    },
    {
      id: 4,
      name: "About Us",
      isActive: false,
    },
    {
      id: 5,
      name: "Contact Us",
      isActive: false,
    },
    {
      id: 6,
      name: "Blog",
      isActive: false,
    },
  ],

  setActive: (id) => {
    set((state) => ({
      navBars: state.navBars.map((navBar) => {
        if (navBar.id === id) {
          return { ...navBar, isActive: true };
        } else {
          return { ...navBar, isActive: false };
        }
      }),
    }));
  },
}));

export default useNavBarStore;