import { lazy } from "react";
import PrivacyPolicy from "../features/Public/pages/PrivacyPolicy";
const Booking = lazy(() => import("../features/Public/pages/BookingPage"));
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
    path: "/booking",
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
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
];

export default publicRoute;
