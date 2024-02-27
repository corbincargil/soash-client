import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function PrimaryLayout() {
  const { state } = useLocation();
  return (
    <>
      <Navbar />
      <div className="min-h-screen h-full w-full bg-slate-200 p-4 flex flex-col justify-between">
        <Header />
        <div className="h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PrimaryLayout;
