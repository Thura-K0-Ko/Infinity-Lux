import { lazy } from "react";
import BlogDetailPage from "../features/Public/pages/BlogDetailPage";
const PrivacyPolicy = lazy(() =>
  import("../features/Public/pages/PrivacyPolicy")
);
const RoomDetailPage = lazy(() =>
  import("../features/Public/pages/RoomDetailPage")
);
const WeddingPage = lazy(() => import("../features/Public/pages/WeddingPage"));
const MeetingPage = lazy(() => import("../features/Public/pages/MeetingPage"));
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
    path: "/rooms/room-detail/:id",
    element: <RoomDetailPage />,
  },
  {
    path: "/booking/:id",
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
    path: "/events/wedding",
    element: <WeddingPage />,
  },
  {
    path: "/events/meeting",
    element: <MeetingPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/blog-detail/:id",
    element: <BlogDetailPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
];

export default publicRoute;
