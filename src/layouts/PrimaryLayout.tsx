import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function PrimaryLayout() {
  const { state } = useLocation();
  return (
    <>
      <Navbar />
      <div className=" bg-slate-200 w-full p-4 flex flex-col h-full justify-between">
        <Header />
        <div className=" h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PrimaryLayout;
