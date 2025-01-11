import { create } from "zustand";

const useRoomStore = create((set) => ({
  rooms: [
    {
      id: 1,
      img: "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (1).png",
      price: "85$/Night",
      category: "Deluxe Room",
      description:
        "Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.",
      services: {
        people: "1-2 People",
        bed: "Twin Bed",
        food: "Breakfast",
        wifi: "Free Wifi",
        swimming: "Swimming Pool",
        area: "398 Sqft",
      },
      detailImgs: [
        "/assets/Hotel Profile website/image-12.png",
        "/assets/Hotel Profile website/image-11.png",
        "/assets/Hotel Profile website/image-10.png",
      ],
      detailContents: [
        "The essence of Yangon has been interpreted through the eyes of renowned Burmese designers to create a synergy of contrasts inspired by nature and the elements. For Cozy, the decor theme includes details of metal, wood and earth.",
        "Features high-quality furniture such as a plush king or queen-sized bed with premium bedding, a stylish armchair or sofa, a work desk, and bedside tables. Modern and luxurious decor creates a welcoming atmosphere.",
      ],
    },
    {
      id: 2,
      img: "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3.png",
      price: "95$/Night",
      category: "Premier Room",
      description:
        "Pamper yourself in a luxurious Comfy room, with stylish interiors and a panoramic view of Yangon’s treasured ...",
      services: {
        people: "1-2 People",
        bed: "King Size Bed",
        food: "Breakfast",
        wifi: "Free Wifi",
        swimming: "Swimming Pool",
        area: "452 Sqft",
      },
      detailImgs: [
        "/assets/Hotel Profile website/image-12.png",
        "/assets/Hotel Profile website/image-11.png",
        "/assets/Hotel Profile website/image-10.png",
      ],
      detailContents: [
        "Premier Room is especially spacious and comfort, and overlooking stunning garden view. Each room has a cozy living area, generously sized working desk and marble bathroom with bathtub and separate walk-in shower.",
        "Cutting-edge technology, including a large flat-screen TV with international channels and streaming capabilities, high-speed Wi-Fi, and bedside controls for lighting and climate. Some premier rooms may include a sound system or a smart speaker.",
      ],
    },
    {
      id: 3,
      img: "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2.png",
      price: "110$/Night",
      category: "Executive Room",
      description:
        "Leading on comfort and refined style, our Club rooms give you special access to Club Signature: our executive room ...",
      services: {
        people: "1-2 People",
        bed: "King Size Bed",
        food: "Breakfast",
        wifi: "Free Wifi",
        swimming: "Swimming Pool",
        area: "484 Sqft",
      },
      detailImgs: [
        "/assets/Hotel Profile website/image-12.png",
        "/assets/Hotel Profile website/image-11.png",
        "/assets/Hotel Profile website/image-10.png",
      ],
      detailContents: [
        "Executive room offers spectacular city views and provides fall-to-ceiling window overlooking the hotel greenery and pools. The room are furnished with comfortable bedding, spacious living and working space.",
        "Well-appointed with a walk-in shower or combination shower and tub, luxury toiletries, soft towels, and amenities such as bathrobes and slippers. Access to an executive lounge, offering complimentary breakfast, evening cocktails, and all-day refreshments.",
      ],
    },
    {
      id: 4,
      img: "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_0.png",
      price: "120$/Night",
      category: "Executive Suite",
      description:
        "Elegant and spacious, our Executive Suite features separate living area and panoramic views of Bangkok.",
      services: {
        people: "1-2 People",
        bed: "King Size Bed",
        food: "Breakfast",
        wifi: "Free Wifi",
        swimming: "Swimming Pool",
        area: "535 Sqft",
      },
      detailImgs: [
        "/assets/Hotel Profile website/image-12.png",
        "/assets/Hotel Profile website/image-11.png",
        "/assets/Hotel Profile website/image-10.png",
      ],
      detailContents: [
        "Executive suite has a separate living room that includes a spacious working area, a huge bathroom with a bathtub and rain shower enclosure, and there is a powder room for your guests.",
        "Master bedroom with a king-sized bed, premium linens, and plush pillows. Living room with a sofa, armchairs, coffee table, and stylish decor.Multiple flat-screen TVs, often one in the living area and another in the bedroom. Smart room controls for lighting, temperature, and curtains.",
      ],
    },
    {
      id: 5,
      img: "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_1.png",
      price: "150$/Night",
      category: "Family Suite",
      description:
        "Our Family Suites speak to luxury in design and freedom in space in an open, wraparound room design.",
      services: {
        people: "1-2 People",
        bed: "King Size Bed",
        food: "Breakfast",
        wifi: "Free Wifi",
        swimming: "Swimming Pool",
        area: "904 Sqft",
      },
      detailImgs: [
        "/assets/Hotel Profile website/image-12.png",
        "/assets/Hotel Profile website/image-11.png",
        "/assets/Hotel Profile website/image-10.png",
      ],
      detailContents: [
        "Family Suite has a luxury apartment-style ambience suitable for families with children. There is a kitchen that is equipped with everything needed for preparing family meals. The living room adjacent to the door leading to the restful bedroom.",
        "Master bedroom with a king-sized or queen-sized bed. Additional beds or bunk beds for children, or a pull-out sofa in the living area. Multiple flat-screen TVs, often one in the main bedroom and another in the living area. High-speed Wi-Fi to keep the family connected.",
      ],
    },
    {
      id: 6,
      img: "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (1).png",
      price: "165$/Night",
      category: "Penthouse Suite",
      description:
        "Explore the magic of our very best-in-class accommodation, the Penthouse Suite.",
      services: {
        people: "1-2 People",
        bed: "King Size Bed",
        food: "Breakfast",
        wifi: "Free Wifi",
        swimming: "Swimming Pool",
        area: "753 Sqft",
      },
      detailImgs: [
        "/assets/Hotel Profile website/image-12.png",
        "/assets/Hotel Profile website/image-11.png",
        "/assets/Hotel Profile website/image-10.png",
      ],
      detailContents: [
        "Penthouse suite with the feel of a private luxurious apartment, is ideal for larger groups. There is a welcome foyer with lounge and partitions that can separate each wing for privacy.",
        "Elegant and high-end furniture, including a king-sized master bed with premium bedding, custom-designed sofas, armchairs, and a dining table. Decor reflects opulence, with bespoke artwork, designer lighting, and luxurious finishes like marble, hardwood, or plush carpeting.",
      ],
    },
  ],
}));

export default useRoomStore;
