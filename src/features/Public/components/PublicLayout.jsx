import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen xl:m-w-[1366px] 2xl:max-w-[1512px] mx-auto overflow-hidden">
      <Suspense fallback={<PageLoading />}>
        <Outlet />{" "}
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
