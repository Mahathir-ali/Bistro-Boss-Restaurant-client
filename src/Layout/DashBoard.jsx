import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu, GiWallet } from "react-icons/gi";
import { FaShoppingCart, FaCalendarAlt, FaHome } from "react-icons/fa";
import {
  MdMenuBook,
  MdPermContactCalendar,
  MdShoppingBag,
} from "react-icons/md";
import useCart from "../hooks/useCart";
const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div>
      <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className=" btn btn-primary drawer-button lg:hidden"
          >
            <GiHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/home">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendarAlt /> Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart /> My Cart
                <span className="badge mr-36">{cart?.length || 0}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <GiWallet />
                Payment History
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <MdMenuBook /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <MdShoppingBag /> Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <MdPermContactCalendar /> Contact US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
