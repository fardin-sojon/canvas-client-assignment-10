import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navber></Navber>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

// bg-[linear-gradient(135deg,#7A3FFF_0%,#C63BFA_100%)]