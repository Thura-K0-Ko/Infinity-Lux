import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen ">
      <Suspense fallback={<PageLoading />}>
        <Outlet />{" "}
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
