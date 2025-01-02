import { lazy } from "react";
const Booking = lazy(() => import("../features/Public/pages/Booking"))
const EventPage = lazy(() => import("../features/Public/pages/EventPage"));
const Rooms = lazy(() => import("../features/Public/pages/RoomsPage"));
const BlogPage = lazy(() => import("../features/Public/pages/BlogPage"));
const HomePage = lazy(() => import("../features/Public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/Public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/Public/pages/ContactUsPage")
);

const publicRoute = [
  {
    path: "/",
    index: true,
    element: <HomePage />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/rooms/room-details/booking",
    element: <Booking />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
];

export default publicRoute;
