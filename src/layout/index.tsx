import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import BackToTop from "@/components/BackToTop";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default RootLayout;
