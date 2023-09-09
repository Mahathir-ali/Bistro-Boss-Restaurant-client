import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  // Hiding navbar and footer from Login page
  const location = useLocation();
  const noNavFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  //
  return (
    <div>
      {noNavFooter || <Navbar />}
      <Outlet></Outlet>
      {noNavFooter || <Footer />}
    </div>
  );
};

export default Main;
