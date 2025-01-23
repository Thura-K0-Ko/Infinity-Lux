import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [
    {
      id: 1,
      title: "What Are The Benefits Of The Spa?",
      description:
        "Discover the ultimate relaxation at our spa. Indulge in a haven designed to re...",
      date: "12 Nov 2024",
      image:
        "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog1.png",
      link: "/blog/spa-benefits",
      imgAlt: "blog1",
    },
    {
      id: 2,
      title: "Luxury Hotel Bathroom Collection",
      description:
        "A luxury hotel bathroom collection blends elegance and practicality, offering ...",
      date: "7 Dec 2024",
      image:
        "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog2.png",
      link: "/blog/hotel-bathroom",
      imgAlt: "blog2",
    },
    {
      id: 3,
      title: "Hotel Restaurant Vs Stand-Alone Restaurant",
      description:
        "Both types of restaurants offer unique advantages: hotel restaurants provide ...",
      date: "25 Nov 2024",
      image:
        "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog3.png",
      link: "/blog/hotel-vs-restaurant",
      imgAlt: "blog3",
    },
    {
      id: 4,
      title: "What is the meaning of deluxe room?",
      description:
        "A deluxe room strikes a balance between affordability and luxury, making it a ...",
      date: "12 Nov 2024",
      image:
        "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog4.png",
      link: "/blog/deluxe-room",
      imgAlt: "blog4",
    },
    {
      id: 5,
      title: "Retro Lighting Design in Hotel..",
      description:
        "This unique feature takes you back to the golden age of hospitality with warm ...",
      date: "7 Dec 2024",
      image:
        "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog5.png",
      link: "/blog/retro-lighting",
      imgAlt: "blog5",
    },
    {
      id: 6,
      title: "Hotels Are Adapting To Modern Traveler",
      description:
        "Discover how our hotel is evolving to meet the needs of today's modern traveler. W ...",
      date: "25 Nov 2024",
      image:
        "/assets/Infinity Lux image Assets/10. Blog Page (Infinity Lux )/Blog6.png",
      link: "/blog/modern-traveler",
      imgAlt: "blog6",
    },
  ],
}));

export default useBlogStore;
