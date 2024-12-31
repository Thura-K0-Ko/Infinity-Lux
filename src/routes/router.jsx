import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../features/Public/components/PublicLayout";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [...publicRoute],
  },
  ...authRoute,

]);

export default router;
