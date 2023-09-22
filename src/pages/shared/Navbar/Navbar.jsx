import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { RiShoppingCartFill } from "react-icons/ri";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart();
  console.log(cart);
  //  logout user
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycart">
          {/* <button className="btn"> */}
          <RiShoppingCartFill className="text-xl" />
          <div className="badge badge-secondary lg:-ml-2 sm:mr-36">
            {cart?.length || 0}
          </div>
          {/* </button> */}
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <span className="text-orange-400">{user?.displayName}</span>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="text-white">
      <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-slate-700 text-white bg-opacity-60 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 "
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal  px-1 active:text-white">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
