import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));


const authRoute = [
  {
    path: "login",
    element: (
      <Suspense fallback={<PageLoading />}>
        <LoginPage />
      </Suspense>
    ),

  },


];

export default authRoute;
