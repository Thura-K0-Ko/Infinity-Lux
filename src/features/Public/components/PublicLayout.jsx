import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen w-[1512px] mx-auto">
      <Suspense fallback={<PageLoading />}>
        <Outlet />{" "}
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
