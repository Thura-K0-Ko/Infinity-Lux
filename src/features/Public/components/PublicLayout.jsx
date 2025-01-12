import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";
import { Suspense } from "react";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen xl:max-w-[1512px] mx-auto overflow-hidden">
      <Suspense fallback={<PageLoading />}>
        <Outlet />{" "}
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
