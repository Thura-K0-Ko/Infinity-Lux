import { create } from "zustand";

const useCustomerReviewStore = create((set) => ({
  customerReview: [
    {
      id: 1,
      rating: 4,
      name: "Sarah M",
      mainContent:
        "I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience.",
      subContent:
        "From the moment I walked into their office, I felt welcomed and supported by their friendly team...",

      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
    {
      id: 2,
      rating: 5,
      name: "Jane",
      mainContent:
        "Once we found the perfect home, Sarah guided me through every step of the buying process, making it",
      subContent:
        "She was an excellent negotiator, and thanks to her skills. I had throughout  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
    {
      id: 3,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
    {
      id: 4,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
    {
      id: 5,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
    {
      id: 6,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
    {
      id: 7,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },

    {
      id: 8,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },

    {
      id: 9,
      rating: 3,
      name: "Bob",
      mainContent:
        "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking questions.",
      subContent:
        " I had throughout the process. Her knowledge of the local real estate market was  ",
      title: "property_consultation",
      img: "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Ellipse 13.svg",
    },
  ],
  setCustomerReview: (data) => set({ customerReview: data }),
}));

export default useCustomerReviewStore;
